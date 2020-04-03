import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
//styles
import './styles/create_user_form.css';
//Hooks
import useFormValidation from '../hooks/useFormValidation';
import { stateSchema, validationSchema } from '../hooks/handleInputChange';
//Mutations
import { CREATE_STUDENT } from '../apolloclient/mutations';

const CreateUserStudentForm = () => {
    const [state, disable, handleOnChange ] = useFormValidation(stateSchema, validationSchema);
    const [createStudent, {data}] = useMutation(CREATE_STUDENT);
    const [err, setErr] = useState(false);

    let inputErr = err ? <span className='span-err'>Todos los campos son obligatorios</span> : '';

    const { firstname, lastname, enrollment, email, password, gender, username } = state;
    
    const errorFirstname = firstname.error ? 'input-register-error' : 'input-register';
    const errorLastname = lastname.error ? 'input-register-error' : 'input-register';
    const errorEnrollment = enrollment.error ? 'input-register-error' : 'input-register';
    const errorEmail = email.error ? 'input-register-error' : 'input-register';
    const errorPassword = password.error ? 'input-register-error' : 'input-register';
    const errorGender = gender.error ? 'input-register-error' : 'input-register';
    const errorUsername = username.error ? 'input-register-error' : 'input-register';

    const errorFirstnameSpan = firstname.error ? <span className='span-error-input'>{firstname.error}</span> : '';
    const errorLastnameSpan = lastname.error ? <span className='span-error-input'>{lastname.error}</span> : '';
    const errorEnrollmentSpan = enrollment.error ? <span className='span-error-input'>{enrollment.error}</span> : '';
    const errorEmailSpan = email.error ? <span className='span-error-input'>{email.error}</span> : '';
    const errorPasswordSpan = password.error ? <span className='span-error-input'>{password.error}</span> : '';
    const errorGenderSpan = gender.error ? <span className='span-error-input'>{gender.error}</span> : '';
    const errorUsernameSpan = username.error ? <span className='span-error-input'>{username.error}</span> : '';

    return(
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={(e) => {
                    e.preventDefault();
                    const { firstname, lastname, enrollment, email, password, gender, username } = state;
                    if (disable) {
                        setErr(true);
                        return;
                    } else {
                        setErr(false);
                    }
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
                    <input className={errorFirstname} placeholder='Nombre' type='text' name='firstname' onChange={handleOnChange}/>
                    {errorFirstnameSpan}
                </div>
                <div>
                    <input className={errorLastname} placeholder='Apellido' type='text' name='lastname' onChange={handleOnChange}/>
                    {errorLastnameSpan}
                </div>
                <div>
                    <input className={errorEnrollment} placeholder='Matricula' type='text' name='enrollment' onChange={handleOnChange}/>
                    {errorEnrollmentSpan}
                </div>
                <div>
                    <input className={errorUsername} placeholder='Usuario' type='text' name='username' onChange={handleOnChange}/>
                    {errorUsernameSpan}
                </div>
                <div>
                    <input className={errorPassword} placeholder='Password' type='password' name='password' onChange={handleOnChange}/>
                    {errorPasswordSpan}
                </div>
                <div>
                    <input className='input-register' placeholder='Confirmar Password' type='password' name='confirmpassword' onChange={handleOnChange}/>
                    {errorPasswordSpan}
                </div>
                <div>
                    <input className={errorEmail} placeholder='Email' type='email' name='email' onChange={handleOnChange}/>
                    {errorEmailSpan}
                </div>
                <div>
                    <select className='input-select-gender' name='gender' onChange={handleOnChange}>
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