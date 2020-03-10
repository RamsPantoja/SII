import mongoose from 'mongoose';

// Importamos los schemas de nuestra para las colecciones de la base de datos.
import { Students } from './db';

mongoose.set('useFindAndModify', false);

export const resolvers = {
    Query: {
        getStudents: (root, {limit}) => {
            return Students.find({}).limit(limit);
        }
    },
    
    Mutation: {
        createStudent: (root, {input}) => {
            const newStudent = new Students({
                matricula: input.matricula,
                username: input.username,
                password: input.password,
                firstname: input.firstname,
                lastname: input.lastname,
                email: input.email,
                img: input.img,
                gender:input.gender
            });

            newStudent.id = newStudent._id;

            return new Promise((resolve, object) => {
                newStudent.save((error) => {
                    if(error) rejects(error);
                    else resolve(newStudent);
                })
            })
        }
    }
}