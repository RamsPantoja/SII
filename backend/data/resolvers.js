import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import shortid from 'shortid'
import bcrypt from 'bcrypt';
import {createWriteStream, mkdir } from 'fs';
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif'];

// Importamos los schemas para las colecciones de la base de datos.
import { Students, Teachers, Courses } from './db';

mongoose.set('useFindAndModify', false);

dotenv.config({path: 'variables.env'});

const transport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
    user: process.env.USER, // generated ethereal user
    pass: process.env.PASS // generated ethereal password
    }
});

//Crea un token basado en el ID del usuario creado y envia un email con el token creado al Email registrado por el Usuario.
const createEmailToken = (entity, SECRET, expiresIn, transport, entityReq) => {
    const { _id, email, firstname } = entity;

    jwt.sign({_id}, SECRET, {expiresIn}, (err, emailToken) => {
        const url = `http://localhost:8200/confirmation/${entityReq}/${emailToken}`;

        transport.sendMail({
            from: 'FIMSystem',
            to: email,
            subject: 'Confirmation Email',
            text: `Hola ${firstname}, haz click en el siguiente link para confirmar tu correo, gracias.`,
            html: `Please click this email to confirm your email: <a href="${url}">${url}<a/>`
        });
    });
}

const createUserToken = (entity, SECRET, expiresIn) => {
    const { email } = entity;

    return jwt.sign({email}, SECRET, {expiresIn});
}
const storeUpload = async ({stream, filename, mimetype}) => {
    const id = shortid.generate();
    const path = `public/images/${id}-${filename}`;
    return new Promise((resolve, reject) => 
        stream.pipe(createWriteStream(path))
        .on("finish", () => resolve({id, path, filename, mimetype}))
        .on("error", reject)
    );
};

const processUpload = async (createReadStream, filename, mimetype) => {
    const stream = createReadStream();
    if (filename != null && imageMimeTypes.includes(mimetype)) {
        const file = await storeUpload({stream, filename, mimetype});
        return file;
    }
}

export const resolvers = {
    Query: {
        getStudents: (root, {limit}) => {
            return Students.find({}).limit(limit);
        },

        getTeachers: (root, {limit}) => {
            return Teachers.find({}).limit(limit);
        },
        getUserStudentAuth: async (root, args, context ) => {
            if (!context.getUserEmail) {
                return null;
            }
            const userStudent = await Students.findOne({email: context.getUserEmail.email});
            return userStudent;
        },
        getUserTeacherAuth: async (root, args, context) => {
            if (!context.getUserEmail) {
                return null;
            }
            const userTeacher = await Teachers.findOne({email: context.getUserEmail.email});
            return userTeacher;
        },
        getCourses: async (root, {limit}) => {
            return Courses.find({}).limit(limit);
        }
    },
    
    Mutation: {
        createCourse: async (root, {input, coverimg}, context) => {
            const { createReadStream, filename, mimetype } = await coverimg;
            const teacher = await Teachers.findOne({email: context.getUserEmail.email});
            const courseAlreadyExist = await Courses.findOne({ courseName: input.coursename });
            const isFormatImage = imageMimeTypes.includes(mimetype);

            mkdir("public/images", { recursive: true}, (err) => {
                if (err) throw err;
            });

            if (courseAlreadyExist && courseAlreadyExist.teacherEmail === teacher.email) {
                throw new Error('Ya ha sido creado anteriormente :(')
            }
            
            if (!isFormatImage) {
                throw new Error('La imagen debe ser .jpg/.gif/.png');
            }
            
            try {
                const file = await processUpload(createReadStream, filename, mimetype);
                const course = await new Courses({
                    courseName: input.coursename,
                    section: input.section,
                    teacher: teacher.firstname +' '+ teacher.lastname,
                    teacherEmail: teacher.email,
                    coverImg: {
                        id: file.id,
                        filename: file.filename,
                        mimetype: file.mimetype,
                        path: file.path
                    }
                }).save();       
            } catch (error) {
                return error;
            }
            
            return 'Curso añadido!'
        },
        createTeacher: async (root, {input}) => {
            const emailAlreadyExist = await Teachers.findOne({
                email: input.email
            });

            if (emailAlreadyExist) {
                throw new Error('El email ya existe!');
            }

            const newTeacher = await new Teachers({
                firstname: input.firstname,
                lastname: input.lastname,
                password: input.password,
                email: input.email,
                img: input.img,
                gender: input.gender,
                isconfirmated: false
            }).save();

            createEmailToken(newTeacher, process.env.EMAIL_SECRET, '6h', transport, 'teacher');

            return `Gracias por registrarte ${input.firstname}, se te ha enviado un correo de confirmacion.`;
        },
        createStudent: async (root, {input}) => {
            const emailAlreadyExist = await Students.findOne({
                email: input.email
            });

            if (emailAlreadyExist) {
                throw new Error('El email ya existe!');
            }
            
            const newStudent = await new Students({
                enrollment: input.enrollment,
                password: input.password,
                firstname: input.firstname,
                lastname: input.lastname,
                email: input.email,
                img: input.img,
                gender:input.gender,
                isconfirmated: false
            }).save();

            createEmailToken(newStudent, process.env.EMAIL_SECRET, '6h', transport, 'student');

            return `Gracias por registrarte ${input.firstname}, se te ha enviado un correo de confirmacion.`;
        },
        authStudent: async (root, {email, password}) => {
            const userStudent = await Students.findOne({email});

            if (!userStudent) {
                throw new Error('El email o contraseña son incorrectos.');
            } else if (userStudent.isconfirmated === false) {
                throw new Error('Email no confirmado');
            }
            
            const userStudentPassword = await bcrypt.compare(password, userStudent.password);
            
            if (!userStudentPassword) {
                throw new Error('El email o contraseña son incorrectos.');
            }


            return {token: createUserToken(userStudent, process.env.SECRET, '1h')}
        },
        authTeacher: async (root, {email, password}) => {
            const userTeacher = await Teachers.findOne({email});

            if (!userTeacher) {
                throw new Error('El email o contraseña son incorrectos.');
            } else if (userTeacher.isconfirmated === false) {
                throw new Error('Email no confirmado');
            }

            const userTeacherPassword = await bcrypt.compare(password, userTeacher.password);

            if (!userTeacherPassword) {
                throw new Error('El email o contraseña son incorrectos.');
            }

            return {token: createUserToken(userTeacher, process.env.SECRET, '1h')}
        }
    }
}