import React from 'react';

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
            </div>
        </div>
    )
}

export default StudentLogin;