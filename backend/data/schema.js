import { gql } from 'apollo-server-express';

const typeDefs = gql `
    type Student {
        id: ID
        enrollment: String
        firstname: String
        lastname: String
        email: String
        img: String
        gender: genderUser
        isconfirmated: Boolean
    }

    type Teacher {
        id: ID
        firstname: String
        lastname: String
        email: String
        img: String
        gender: genderUser
        isconfirmated: Boolean
    }

    type Token {
        token: String!
    }

    enum genderUser {
        FEMENINO
        MASCULINO
    }

    input inputStudent {
        id: ID
        enrollment: String!
        password: String!
        firstname: String!
        lastname: String!
        email: String!
        img: String
        gender: genderUser!
        isconfirmated: Boolean
    }

    input inputTeacher {
        id: ID
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        img: String
        gender: genderUser!
        isconfirmated: Boolean
    }

    type Query {
        getStudents(limit: Int): [Student]
        getTeachers(limit: Int): [Teacher]
        getUserStudentAuth: Student
        getUserTeacherAuth: Teacher
    }

    type Mutation {
        createStudent(input: inputStudent): String
        createTeacher(input: inputTeacher): String
        authStudent(email: String!, password: String!): Token
        authTeacher(email: String!, password: String!): Token
    }

`

export {typeDefs};