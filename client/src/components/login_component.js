import React, { Fragment, useState } from 'react';

//Hooks
import { useHandleInputChange } from '../hooks/useHandleInputChange';
//Styles
import './styles/login_component.css';

const LoginComponentWithHook = () => {
    const [input, handleInputChange] = useHandleInputChange();

    return (
        <Fragment>
            <form className='form-container'>
                <div>
                    <input className='input-login' type="text" placeholder='User' name='username' onChange={handleInputChange}/>
                </div>
                <div>
                    <input className='input-login' type="password" placeholder='Password' name="password" onChange={handleInputChange}/>
                </div>
                <div>
                    <button type='submit' className='button-login'>Iniciar Sesion</button>
                </div>
            </form>
        </Fragment>
    )
}

export default LoginComponentWithHook;