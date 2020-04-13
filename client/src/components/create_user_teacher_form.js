import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

//Styles
import './styles/create_user_form.css';

//Hooks
import useFormValidation from '../hooks/useFormValidation';
import { stateSchemaTeacher, validationSchemaTeacher } from '../hooks/handleInputChange';

//Mutations
import { CREATE_TEACHER } from '../apolloclient/mutations';

const CreateUserTeacherForm = () => {
    const [createTeacher, {data}] = useMutation(CREATE_TEACHER, {errorPolicy: 'all'});
    const [state, disable, handleOnChange] = useFormValidation(stateSchemaTeacher, validationSchemaTeacher);
    const [err, setErr] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const errSpan = err ?  <span className='span-err'>Todos los campos son obligatorios</span> : null;
    const confirmPasswordErrorSpan = confirmPasswordError ? <span className='span-error-input'>La contraseña no coincide.</span> : null;

    const { firstname, lastname, password, confirmpassword, email, gender } = state;

    useEffect(() => {
        if (confirmpassword.value !== password.value) {
            setConfirmPasswordError(true);
        } else {
            setConfirmPasswordError(false);
        }
    },[confirmpassword.value, password.value]);

    //Cambia el valor del className que se encuentra en las etiquetas Input, si hay error son rojas de lo contrario no.
    const errorFirstname = firstname.error ? 'input-register-error' : 'input-register';
    const errorLastname = lastname.error ? 'input-register-error' : 'input-register';
    const errorPassword = password.error ? 'input-register-error' : 'input-register';
    const errorConfirmPassword = confirmpassword.error || confirmPasswordError ? 'input-register-error' : 'input-register';
    const errorEmail = email.error ? 'input-register-error' : 'input-register';
    const errorGender = gender.error ? 'input-select-gender-error' : 'input-select-gender';

    //Agrega un Span para mostrar cual es el error en la etiqueta Input.
    const errorFirstnameSpan = firstname.error ? <span className='span-error-input'>{firstname.error}</span> : null;
    const errorLastnameSpan = lastname.error ? <span className='span-error-input'>{lastname.error}</span> : null;
    const errorPasswordSpan = password.error ? <span className='span-error-input'>{password.error}</span> : null;
    const errorConfirmPasswordSpan = confirmpassword.error ? <span className='span-error-input'>{confirmpassword.error}</span> : null;
    const errorEmailSpan = email.error ? <span className='span-error-input'>{email.error}</span> : null;
    const errorGenderSpan = gender.error ? <span className='span-error-input'>{gender.error}</span> : null;
    
    return (
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={(e) => {
                    e.preventDefault();
                    if (disable) {
                        setErr(true);
                        return false;
                    } else {
                        setErr(false);
                    }
                    
                    createTeacher({variables:{input: {
                        firstname: firstname.value,
                        lastname: lastname.value,
                        password: password.value,
                        email: email.value,
                        gender: gender.value
                    }}});
                }}>
                <div>{errSpan}</div>           
                <div>
                    <input placeholder='Nombre' type='text' className={errorFirstname} name='firstname' value={firstname.value} onChange={handleOnChange}/>
                    {errorFirstnameSpan}
                </div>
                <div>
                   <input placeholder='Apellido' type='text' className={errorLastname} name='lastname' value={lastname.value} onChange={handleOnChange}/>
                   {errorLastnameSpan}
                </div>
                <div>
                    <input placeholder='Contraseña' type='password' className={errorPassword} name='password' value={password.value} onChange={handleOnChange}/>
                    {errorPasswordSpan}
                </div>
                <div>
                    <input placeholder='Confirmar contraseña' type='password' className={errorConfirmPassword} name='confirmpassword' value={confirmpassword.value} onChange={handleOnChange}/>
                    {errorConfirmPasswordSpan || confirmPasswordErrorSpan}
                </div>
                <div>
                    <input placeholder='Email' type='email' className={errorEmail} name='email' value={email.value} onChange={handleOnChange}/>
                    {errorEmailSpan}
                </div>
                <div>
                    <select className={errorGender} name='gender' value={gender.value} onChange={handleOnChange}>
                        <option value=''>Sexo</option>
                        <option value='MASCULINO'>MASCULINO</option>
                        <option value='FEMENINO'>FEMENINO</option>
                    </select>
                    {errorGenderSpan}
                </div>
                <button type='submit' className='button-submit'>Crear</button>
            </form>
            
        </div>
    )
}

export default CreateUserTeacherForm;