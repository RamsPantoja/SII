import React, { Fragment, useState } from 'react';

//Hooks
//Styles
import './styles/login_component.css';

const LoginComponentWithHook = ({handleInputChange, state, authEntity}) => {
    const {email, password} = state;

    const handleOnSubmit = (e, authEntity) => {
        e.preventDefault();
        authEntity();
    }

    return (
        <Fragment>
            <form className='form-container'
                onSubmit={(e) => {
                    handleOnSubmit(e, authEntity);
                }}
            >
                <div>
                    <input className='input-login' type="text" placeholder='Email' value={email.value} name='email' onChange={handleInputChange}/>
                </div>
                <div>
                    <input className='input-login' type="password" placeholder='Password' value={password.value} name="password" onChange={handleInputChange}/>
                </div>
                <div>
                    <button type='submit' className='button-login'>Iniciar Sesion</button>
                </div>
            </form>
        </Fragment>
    )
}

export default LoginComponentWithHook;