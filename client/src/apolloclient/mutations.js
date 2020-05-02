import gql from 'graphql-tag';


export const CREATE_STUDENT = gql `
  mutation CreateUserStudentForm($input: inputStudent) {
    createStudent(input: $input)
  }
`;


export const CREATE_TEACHER = gql `
  mutation CreateUserTeacherForm($input: inputTeacher) {
    createTeacher(input: $input)
  }
`;

export const AUTH_STUDENT = gql `
  mutation StudentUserAuth($email: String!, $password: String!) {
    authStudent(email: $email password: $password){
      token
    }
  }
`;

export const AUTH_TEACHER = gql `
  mutation TeacherUserAuth($email: String!, $password: String!) {
    authTeacher(email: $email password: $password){
      token
    }
  }
`
