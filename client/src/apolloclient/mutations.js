import gql from 'graphql-tag';


export const CREATE_STUDENT = gql `
  mutation CreateUserStudentForm($input: inputStudent) {
      createStudent(input: $input) {
        matricula
        username
        email
        gender
      }
  }
`;