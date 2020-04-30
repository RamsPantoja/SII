import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';


// Importamos los schemas de nuestra para las colecciones de la base de datos.
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

export const resolvers = {
    Query: {
        getStudents: (root, {limit}) => {
            return Students.find({}).limit(limit);
        },

        getTeachers: (root, {limit}) => {
            return Teachers.find({}).limit(limit);
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

            return `Gracias por registrarte ${input.firstname}, te hemos enviado un correo de confirmacion.`;
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

            createEmailToken(newStudent, process.env.EMAIL_SECRET, '1d', transport, 'student');

            return `Gracias por registrarte ${input.firstname}, se te ha enviado un correo de confirmacion.`;
        }
    }
}