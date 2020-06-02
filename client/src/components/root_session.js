import { CURRENT_USER_STUDENT, CURRENT_USER_TEACHER } from '../apolloclient/querys';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';

const RootSession = ({Component}) => {
    const { data: currentUserStudent, 
        error: currentUserStudentError, 
        loading: currentUserStudentLoading, 
        refetch: currentUserStudentRefetch } = useQuery(CURRENT_USER_STUDENT);    
    const { data: currentUserTeacher, 
        error: currentUserTeacherError, 
        loading: currentUserTeacherLoading, 
        refetch: currentUserTeacherRefetch } = useQuery(CURRENT_USER_TEACHER); 

    if (currentUserTeacherLoading || currentUserStudentLoading) {
        return null;
    }
    return (
        <Component currentUserStudentRefetch={currentUserStudentRefetch} sessionStudent={currentUserStudent} currentUserTeacherRefetch={currentUserTeacherRefetch} sessionTeacher={currentUserTeacher}/>
    )
}

export default RootSession;