import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


// Importamos los schemas para las colecciones de la base de datos.
import { Students, Teachers } from './db';

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

export const resolvers = {
    Query: {
        getStudents: (root, {limit}) => {
            return Students.find({}).limit(limit);
        },

        getTeachers: (root, {limit}) => {
            return Teachers.find({}).limit(limit);
        },
        getUserStudentAuth: async (root, args, {userEmail}) => {
            if (!userEmail) {
                return null;
            }
            const studentUser = await Students.findOne({email: userEmail.email});
            return studentUser;
        },
        getUserTeacherAuth: async (root, args, {userEmail}) => {
            if (!userEmail) {
                return null;
            }
            const teacherUser = await Teachers.findOne({ email: userEmail.email});
            return teacherUser;
        }
    },
    
    Mutation: {
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