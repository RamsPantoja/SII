import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER_STUDENT } from '../apolloclient/querys';

const SessionStudent = wrappedComponent => props => {
    const { loading, error, data, refetch } = useQuery(CURRENT_USER_STUDENT);
    if (loading) {
        return null;
    }
    return (
       <wrappedComponent {...props} refetch={refetch} session={data}/>
    )
}

export default SessionStudent;