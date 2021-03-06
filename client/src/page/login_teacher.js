import React, { Fragment } from 'react';
import { Link, withRouter, useHistory, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Components
import LoginComponentWithHook from '../components/login_component';
//Hooks
import useAuthValidation from '../hooks/useAuthValidation';
//Mutations
import { AUTH_TEACHER } from '../apolloclient/mutations';
//styles
import './styles/login_styles.css';
import { stateSchemaLogin } from '../hooks/handleInputChange';

const TeacherLogin = ({currentUserTeacherRefetch, sessionTeacher}) => {
    const history = useHistory();
    const { getUserTeacherAuth } = sessionTeacher;
    const [state, handleInputChange] = useAuthValidation(stateSchemaLogin);
    const { email, password } = state;

    const [authTeacher, {data, loading, error}] = useMutation(AUTH_TEACHER, {
        errorPolicy: 'all',
        variables: {
            email: email.value,
            password: password.value
        },
        onCompleted: async (data) => {
            localStorage.setItem('token', data.authTeacher.token);
            await currentUserTeacherRefetch();
            history.push('/teacher_panel');
        }
    });

    const errorSpan = error ? <span className='error-span'>{error.message}</span> : null;
    const isTeacherAuth = getUserTeacherAuth ? <Redirect to='/teacher_panel'/> : null;

    return (
        <Fragment>
            {isTeacherAuth}
            <Link className='to-home' to='/'>Inicio</Link>
            <div className='login-container'>
                <div className='login-subcontainer'>
                    <img src='./img/rueda-dentada.svg' height='100px' width='100px' alt='teacher-icon'/>
                    <h1>Profesor</h1>
                    <LoginComponentWithHook
                    state={state}
                    handleInputChange={handleInputChange}
                    authEntity={authTeacher}
                    error={error}/>
                    {errorSpan}
                    <span className='container-link'>No tienes una cuenta?<Link className='link-to-create-user' to='/teacher_register'>Crear Cuenta</Link></span>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(TeacherLogin);