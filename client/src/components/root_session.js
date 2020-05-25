import React, { useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER_STUDENT, CURRENT_USER_TEACHER } from '../apolloclient/querys';

const RootSession = ({Component}) => {
    
    return (
        <Component refetchStudent={}/>
    )
}
export default RootSession;

