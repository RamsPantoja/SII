import React, { Fragment, useState } from 'react';

//Hooks
//Styles
import './styles/login_component.css';

const LoginComponentWithHook = () => {

    return (
        <Fragment>
            <form className='form-container'>
                <div>
                    <input className='input-login' type="text" placeholder='Email' name='username'/>
                </div>
                <div>
                    <input className='input-login' type="password" placeholder='Password' name="password"/>
                </div>
                <div>
                    <button type='submit' className='button-login'>Iniciar Sesion</button>
                </div>
            </form>
        </Fragment>
    )
}

export default LoginComponentWithHook;