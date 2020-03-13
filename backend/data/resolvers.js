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
                })
            })
        },
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
                newStudent.save((err) => {
                    if (err) rejects(err);
                    else resolve(newStudent);
                });
            });
        }
    }
}