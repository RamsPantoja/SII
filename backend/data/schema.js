import { gql } from 'apollo-server-express';

const typeDefs = gql `
    type Student {
        id: ID
        matricula: String
        username: String
        password: String
        firstname: String
        lastname: String
        email: String
        img: String
        gender: genderStudent
    }

    enum genderStudent {
        MUJER
        HOMBRE
    }

    input inputStudent {
        id: ID
        matricula: String!
        username: String!
        password: String!
        firstname: String!
        lastname: String!
        email: String!
        img: String,
        gender: genderStudent!
    }

    type Query {
        getStudents(limit: Int): [Student]
    }

    type Mutation {
        createStudent(input: inputStudent): Student
    }

`

export {typeDefs};