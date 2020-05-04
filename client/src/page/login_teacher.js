import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

//Components
import LoginComponentWithHook from '../components/login_component';
//Hooks
import useAuthValidation from '../hooks/useAuthValidation';
//Mutations
import { AUTH_TEACHER } from '../apolloclient/mutations';
//styles
import './styles/login_styles.css';
import { stateSchemaLogin } from '../hooks/handleInputChange';

const TeacherLogin = () => {
    const [state, handleInputChange] = useAuthValidation(stateSchemaLogin);
    const { email, password } = state;
    const [authTeacher, {data, loading, error}] = useMutation(AUTH_TEACHER, {
        errorPolicy: 'all',
        variables: {
            email: email.value,
            password: password.value
        },
        onCompleted: (data) => {
            localStorage.setItem('token', data.authTeacher.token);
        }
    });

    const errorSpan = error ? <span className='error-span'>{error.message}</span> : null;

    return (
        <div className='login-container'>
            <div className='login-subcontainer'>
                <img src='./img/user.png' height='100px' width='100px'/>
                <h1>Profesor</h1>
                <LoginComponentWithHook
                state={state}
                handleInputChange={handleInputChange}
                authEntity={authTeacher}
                error={error}/>
                {errorSpan}
                <span className='container-link'>No tienes una cuenta?<Link className='link-to-create-user' to='/teacher/register'>Crear Cuenta</Link></span>
            </div>
        </div>
    )
}

export default TeacherLogin;