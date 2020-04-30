import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Students, Teachers } from './data/db';

dotenv.config({path:'variables.env'});
mongoose.set('useFindAndModify', false);


const app = express();

const server = new ApolloServer({
    typeDefs, 
    resolvers
});

//to send emails need a transporter object.
app.get('/confirmation/student/:emailtoken', async (req, res) => {
    try {
        const student = jwt.verify(req.params.emailtoken, process.env.EMAIL_SECRET);
        await Students.findOneAndUpdate({_id : student._id}, {isconfirmated: true});
    } catch (e) {
        res.send('error');
    }

    return res.redirect('http://localhost:3000/student/login');
});

app.get('/confirmation/teacher/:emailtoken', async (req, res) => {
    try {
        const teacher = jwt.verify(req.params.emailtoken, process.env.EMAIL_SECRET);
        await Teachers.findOneAndUpdate({_id : teacher._id}, {isconfirmated: true});
    } catch (e) {
        res.send('error');
    }

    return res.redirect('http://localhost:3000/teacher/login');
});

server.applyMiddleware({app});

app.listen({port:8200}, () => console.log(`🚀 Server is running http://localhost:8200${server.graphqlPath}`));
