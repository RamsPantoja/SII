import gql from 'graphql-tag';

export const CURRENT_USER_STUDENT = gql `
    query getUserStudentAuth {
        getUserStudentAuth {
            email
        }
    }
`
export const CURRENT_USER_TEACHER = gql `
    query getUserTeacherAuth {
        getUserTeacherAuth {
            email
        }
    }
`