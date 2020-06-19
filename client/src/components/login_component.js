import React, { Fragment, useState } from 'react';

//Hooks
//Styles
import './styles/login_component.css';

const LoginComponentWithHook = ({handleInputChange, state, authEntity, error, loading}) => {
    const {email, password} = state;

    const handleOnSubmit = (e, authEntity) => {
        e.preventDefault();
        authEntity();
    }

    const errorfieldStyle = error ? 'input-login-error' : 'input-login';
    const isLoading = loading ? <div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div> : <button type='submit' className='button-login'>Iniciar Sesion</button>
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
                    <input className={errorfieldStyle} type="password" placeholder='Contraseña' value={password.value} name="password" onChange={handleInputChange}/>
                </div>
                <div>
                    <button type='submit' className='button-login'>Iniciar Sesion</button>
                </div>
            </form>
        </Fragment>
    )
}

export default LoginComponentWithHook;