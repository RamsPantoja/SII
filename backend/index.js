import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { Students, Teachers } from './data/db';

dotenv.config({path:'variables.env'});
mongoose.set('useFindAndModify', false);
const dir = path.join(process.cwd(), 'public/images');
const app = express();

app.use('/public/images', express.static(dir));
app.use(cors('*'));

//establece el contexto entre el servidor y el cliente, leyendo los headers del cliente.
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: async ({req}) => {
        const token = req.headers.authorization || '';

        if (token !== "null") {
            try {
                //verifica el token y desincripta el objeto que hay en el.
                const getUserEmail = await jwt.verify(token, process.env.SECRET);
                //se hace el objeto getUserEmail parte del request.
                req.getUserEmail = getUserEmail;
                return { getUserEmail }
            } catch (error) {
                console.log(error);
            }
        }
    }
});

//Actualiza la propiedad isconfirmated del objeto con el id que se encuentra en la coleccion Students, y la cambia a true cuando se hace el req a la url.
app.get('/confirmation/student/:emailtoken', async (req, res) => {
    try {
        const student = await jwt.verify(req.params.emailtoken, process.env.EMAIL_SECRET);
        await Students.findOneAndUpdate({_id : student._id}, {isconfirmated: true});
    } catch (e) {
        res.send('error');
    }

    return res.redirect('http://localhost:3000/student_login');
});

//Actualiza la propiedad isconfirmated del objeto con el id que se encuentra en la coleccion Teachers, y la cambia a true cuando se hace el req a la url.
app.get('/confirmation/teacher/:emailtoken', async (req, res) => {
    try {
        const teacher = await jwt.verify(req.params.emailtoken, process.env.EMAIL_SECRET);
        await Teachers.findOneAndUpdate({_id : teacher._id}, {isconfirmated: true});
    } catch (e) {
        res.send('error');
    }

    return res.redirect('http://localhost:3000/teacher_login');
});

server.applyMiddleware({app});

app.listen({port:8200}, () => console.log(`🚀 Server is running http://localhost:8200${server.graphqlPath}`));
