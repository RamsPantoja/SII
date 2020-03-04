import React from 'react';

//Components
import LoginComponentWithHook from '../components/login_component';
//styles
import './styles/login_styles.css';

const DocentLogin = () => {
    return (
        <div className='login-container'>
            <div className='login-subcontainer'>
                <img src='./img/user.png' height='100px' width='100px'/>
                <h1>Profesor</h1>
                <LoginComponentWithHook/>
            </div>
        </div>
    )
}

export default DocentLogin;