import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

//Components
import LoginComponentWithHook from '../components/login_component';

//Hooks
import useAuthValidation from '../hooks/useAuthValidation';
//Mutations
import {AUTH_STUDENT} from '../apolloclient/mutations';

//Styles 
import './styles/login_styles.css';
import { stateSchemaLogin } from '../hooks/handleInputChange';

const StudentLogin = () => {
    const [state, handleInputChange] = useAuthValidation(stateSchemaLogin);
    const { email, password } = state;
    const [authStudent, {data, loading, error}] = useMutation(AUTH_STUDENT, {
        errorPolicy: 'all',
        variables: {
            email: email.value,
            password: password.value
        },
        onCompleted: (data) => {
            localStorage.setItem('token', data.authStudent.token);
        }
    })

    const errorSpan = error ? <span className='error-span'>{error.message}</span> : null;
    
    return (
        <div className='login-container'>
            <div className='login-subcontainer'>
                <img src='./img/graduated.png' height='100px' width='100px'></img>
                <h1>Alumno</h1>
                <LoginComponentWithHook
                handleInputChange={handleInputChange}
                state={state}
                authEntity={authStudent}
                error={error}/>
                {errorSpan}
                <span className='container-link'>No tienes una cuenta?<Link className='link-to-create-user' to='/student/register'>Crear Cuenta</Link></span>
            </div>
        </div>
    )
}

export default StudentLogin;