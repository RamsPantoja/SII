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