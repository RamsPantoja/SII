import React from 'react';
import { Link } from 'react-router-dom';

//Components
import LoginComponentWithHook from '../components/login_component';

//Styles 
import './styles/login_styles.css';

const StudentLogin = () => {
    return (
        <div className='login-container'>
            <div className='login-subcontainer'>
                <img src='./img/graduated.png' height='100px' width='100px'></img>
                <h1>Alumno</h1>
                <LoginComponentWithHook/>
                <span>No tienes una cuenta?<Link className='link-to-create-user' to='/student/register'>Crear Cuenta</Link></span>
            </div>
        </div>
    )
}

export default StudentLogin;