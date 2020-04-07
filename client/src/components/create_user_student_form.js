import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
//styles
import './styles/create_user_form.css';
//Hooks
import useFormValidation from '../hooks/useFormValidation';
import { stateSchemaStudent, validationSchemaStudent } from '../hooks/handleInputChange';
//Mutations
import { CREATE_STUDENT } from '../apolloclient/mutations';

const CreateUserStudentForm = () => {
    //Hook de validacion del Formulario.
    const [state, disable, handleOnChange ] = useFormValidation(stateSchemaStudent, validationSchemaStudent);
    const [createStudent, {data}] = useMutation(CREATE_STUDENT);
    const [err, setErr] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const inputErr = err ? <span className='span-err'>Todos los campos son obligatorios</span> : '';
    const confirmPasswordErrorSpan = confirmPasswordError ? <span className='span-error-input'>La contraseña no coincide.</span> : null;
    
    const { firstname, lastname, enrollment, email, password, gender, username, confirmpassword } = state;

    useEffect(() => {
        if (confirmpassword.value !== password.value) {
            setConfirmPasswordError(true);
        } else {
            setConfirmPasswordError(false);
        }
    });
    
    //Cambia el valor del className que se encuentra en las etiquetas Input, si hay error son rojas de lo contrario no.
    const errorFirstname = firstname.error ? 'input-register-error' : 'input-register';
    const errorLastname = lastname.error ? 'input-register-error' : 'input-register';
    const errorEnrollment = enrollment.error ? 'input-register-error' : 'input-register';
    const errorEmail = email.error ? 'input-register-error' : 'input-register';
    const errorPassword = password.error ? 'input-register-error' : 'input-register';
    const errorConfirmPassword = confirmpassword.error || confirmPasswordError ? 'input-register-error' : 'input-register';
    const errorGender = gender.error ? 'input-select-gender-error' : 'input-select-gender';
    const errorUsername = username.error ? 'input-register-error' : 'input-register';

    //Agrega un Span para mostrarle al Usuario cual es el error en la etiqueta Input.
    const errorFirstnameSpan = firstname.error ? <span className='span-error-input'>{firstname.error}</span> : '';
    const errorLastnameSpan = lastname.error ? <span className='span-error-input'>{lastname.error}</span> : '';
    const errorEnrollmentSpan = enrollment.error ? <span className='span-error-input'>{enrollment.error}</span> : '';
    const errorEmailSpan = email.error ? <span className='span-error-input'>{email.error}</span> : '';
    const errorPasswordSpan = password.error ? <span className='span-error-input'>{password.error}</span> : '';
    const errorConfirmPasswordSpan = confirmpassword.error ? <span className='span-error-input'>{confirmpassword.error}</span> : '';
    const errorGenderSpan = gender.error ? <span className='span-error-input'>{gender.error}</span> : '';
    const errorUsernameSpan = username.error ? <span className='span-error-input'>{username.error}</span> : '';

    return(
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={(e) => {
                    e.preventDefault();
                    //Si falta algun campo en el formulario, retorna false y retiene la peticion.
                    if (disable) {
                        setErr(true);
                        return false;
                    } else {
                        setErr(false);
                    }
                    //Se ejecuta el Mutation, se le pasan los valores del Input como variables y envia el formulario.
                    createStudent({variables:{input: {
                        firstname: firstname.value,
                        lastname: lastname.value,
                        enrollment: enrollment.value,
                        email: email.value,
                        password: password.value,
                        gender: gender.value,
                        username: username.value
                    }}});
                }}>
                <div>{inputErr}</div>
                <div>
                    <input className={errorFirstname} placeholder='Nombre' type='text' name='firstname' value={firstname.value} onChange={handleOnChange}/>
                    {errorFirstnameSpan}
                </div>
                <div>
                    <input className={errorLastname} placeholder='Apellido' type='text' name='lastname' value={lastname.value} onChange={handleOnChange}/>
                    {errorLastnameSpan}
                </div>
                <div>
                    <input className={errorEnrollment} placeholder='Matricula' type='text' name='enrollment' value={enrollment.value} onChange={handleOnChange}/>
                    {errorEnrollmentSpan}
                </div>
                <div>
                    <input className={errorUsername} placeholder='Usuario' type='text' name='username' value={username.value} onChange={handleOnChange}/>
                    {errorUsernameSpan}
                </div>
                <div>
                    <input className={errorPassword} placeholder='Contraseña' type='password' name='password' value={password.value} onChange={handleOnChange}/>
                    {errorPasswordSpan}
                </div>
                <div>
                    <input className={errorConfirmPassword} placeholder='Confirmar contraseña' type='password' value={confirmpassword.value} name='confirmpassword' onChange={handleOnChange}/>
                    {confirmPasswordErrorSpan || errorConfirmPasswordSpan}
                </div>
                <div>
                    <input className={errorEmail} placeholder='Email' type='email' value={email.value} name='email' onChange={handleOnChange}/>
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

export default CreateUserStudentForm;