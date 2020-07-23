import React, { useState, useEffect } from 'react';
//Styles
import './styles/create_user_form.css';
//Components
import Error from '../alerts/error';

const CreateUserTeacherForm = ({state, disable, createTeacher, loading, error, handleOnChange}) => {
    const [err, setErr] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const { firstname, lastname, password, confirmpassword, email, gender } = state;

    useEffect(() => {
        if (confirmpassword.value !== password.value) {
            setConfirmPasswordError(true);
        } else {
            setConfirmPasswordError(false);
        }
    },[confirmpassword.value, password.value]);

    const handleOnSubmit = (e, createTeacher) => {
        e.preventDefault();
        if (disable.status) {
            setErr(true);
            return false;
        } else {
            setErr(false);
        }
        createTeacher();
    }

    const errorSpan = err && disable.error ? <Error error={disable.error}/> : null;
    const confirmPasswordErrorSpan = confirmPasswordError ? <span className='span-error-input'>La contraseña no coincide.</span> : null;
    const errorApollo = error ? <Error error={error.message}/> : null;

    //Cambia el valor del className que se encuentra en las etiquetas Input, si hay error son rojas de lo contrario no.
    const errorConfirmPassword = confirmpassword.error || confirmPasswordError ? 'input-register-error' : 'input-register';
    const errorGender = gender.error ? 'input-select-gender-error' : 'input-select-gender';

    //Agrega un Span para mostrar cual es el error en la etiqueta Input.
    const errorConfirmPasswordSpan = confirmpassword.error ? <span className='span-error-input'>{confirmpassword.error}</span> : null;
    
    if (error && error.networkError) {
        return (
            <div className='network-error'>{error.message}</div>
        )
    }

    return (
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={(e) => {
                    handleOnSubmit(e, createTeacher);
                }}>  
                <div>
                    {errorSpan || errorApollo}
                </div>           
                <div>
                    <input placeholder='Nombre' type='text' className={firstname.errorfield} name='firstname' value={firstname.value} onChange={handleOnChange}/>
                    {firstname.error && <Error error={firstname.error}/>}
                </div>
                <div>
                   <input placeholder='Apellido' type='text' className={lastname.errorfield} name='lastname' value={lastname.value} onChange={handleOnChange}/>
                   {lastname.error && <Error error={lastname.error}/>}
                </div>
                <div>
                    <input placeholder='Contraseña' type='password' className={password.errorfield} name='password' value={password.value} onChange={handleOnChange}/>
                    {password.error && <Error error={password.error}/>}
                </div>
                <div>
                    <input placeholder='Confirmar contraseña' type='password' className={errorConfirmPassword} name='confirmpassword' value={confirmpassword.value} onChange={handleOnChange}/>
                    {errorConfirmPasswordSpan || confirmPasswordErrorSpan}
                </div>
                <div>
                    <input placeholder='Email' type='email' className={email.errorfield} name='email' value={email.value} onChange={handleOnChange}/>
                    {email.error && <Error error={email.error}/>}
                </div>
                <div>
                    <select className={errorGender} name='gender' value={gender.value} onChange={handleOnChange}>
                        <option value=''>Sexo</option>
                        <option value='MASCULINO'>MASCULINO</option>
                        <option value='FEMENINO'>FEMENINO</option>
                    </select>
                    {gender.error && <Error error={gender.error}/>}
                </div>
                <button type='submit' disabled={loading} className='button-submit'>Crear</button>
            </form>
            
        </div>
    )
}

export default CreateUserTeacherForm;