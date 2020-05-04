import React, { Fragment, useState } from 'react';

//Hooks
//Styles
import './styles/login_component.css';

const LoginComponentWithHook = ({handleInputChange, state, authEntity, error}) => {
    const {email, password} = state;

    const handleOnSubmit = (e, authEntity) => {
        e.preventDefault();
        authEntity();
    }

    const errorfieldStyle = error ? 'input-login-error' : 'input-login';

    return (
        <Fragment>
            <form className='form-container'
                onSubmit={(e) => {
                    handleOnSubmit(e, authEntity);
                }}
            >
                <div>
                    <input className={errorfieldStyle} type="text" placeholder='Email' value={email.value} name='email' onChange={handleInputChange}/>
                </div>
                <div>
                    <input className={errorfieldStyle} type="password" placeholder='Password' value={password.value} name="password" onChange={handleInputChange}/>
                </div>
                <div>
                    <button type='submit' className='button-login'>Iniciar Sesion</button>
                </div>
            </form>
        </Fragment>
    )
}

export default LoginComponentWithHook;