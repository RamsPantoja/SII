import React from 'react';
import { Link } from 'react-router-dom';

//Components
import LoginComponentWithHook from '../components/login_component';
//styles
import './styles/login_styles.css';

const TeacherLogin = () => {
    return (
        <div className='login-container'>
            <div className='login-subcontainer'>
                <img src='./img/user.png' height='100px' width='100px'/>
                <h1>Profesor</h1>
                <LoginComponentWithHook/>
                <spa>No tienes una cuenta?<Link className='link-to-create-user' to='/teacher/register'>Crear Cuenta</Link></spa>
            </div>
        </div>
    )
}

export default TeacherLogin;