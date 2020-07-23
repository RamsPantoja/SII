import React, { Fragment } from 'react';
import { useMutation } from '@apollo/client';
import { Link, withRouter, Redirect, useHistory } from 'react-router-dom';

//Components
import LoginComponentWithHook from '../components/login_component';

//Hooks
import useAuthValidation from '../hooks/useAuthValidation';
//Mutations
import {AUTH_STUDENT} from '../apolloclient/mutations';

//Styles 
import './styles/login_styles.css';
import { stateSchemaLogin } from '../hooks/handleInputChange';

const StudentLogin = ({currentUserStudentRefetch, sessionStudent}) => {
    let history = useHistory();
    const [state, handleInputChange] = useAuthValidation(stateSchemaLogin);
    const { email, password } = state;
    const { getUserStudentAuth } = sessionStudent;

    const [authStudent, {data, loading, error}] = useMutation(AUTH_STUDENT, {
        errorPolicy: 'all',
        variables: {
            email: email.value,
            password: password.value
        },
        onCompleted: async (data) => {
            localStorage.setItem('token', data.authStudent.token);
            await currentUserStudentRefetch();
            history.push('/student_panel')
        }
    })

    const errorSpan = error ? <span className='error-span'>{error.message}</span> : null;
    const isStudentAuth = getUserStudentAuth ? <Redirect to='/student_panel'/> : null;
    
    return (
        <Fragment>
            {isStudentAuth}
            <div className='login-container'>
                <div className='login-subcontainer'>
                    <img src='./img/perfil.svg' height='100px' width='100px' alt='student-icon'></img>
                    <h1>Alumno</h1>
                    <LoginComponentWithHook
                    handleInputChange={handleInputChange}
                    state={state}
                    authEntity={authStudent}
                    error={error}
                    loading={loading}/>
                    {errorSpan}
                    <span className='container-link'>No tienes una cuenta?<Link className='link-to-create-user' to='/student_register'>Crear Cuenta</Link></span>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(StudentLogin);