import mongoose from 'mongoose';

// Importamos los schemas de nuestra para las colecciones de la base de datos.
import { Students, Teachers } from './db';

mongoose.set('useFindAndModify', false);

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
        createTeacher: (root, {input}) => {
            const newTeacher = new Teachers({
                firstname: input.firstname,
                lastname: input.lastname,
                password: input.password,
                email: input.email,
                img: input.img,
                gender: input.gender
            });

            newTeacher.id = newTeacher._id;

            return new Promise((resolve, object) => {
                newTeacher.save((error) => {
                    if(error) rejects(error);
                    else resolve(newTeacher);
                });
            });
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
                gender:input.gender
            }).save();
            
            return "Gracias por registrarte, te hemos enviado un correo de confirmacion.";
        }
    }
}