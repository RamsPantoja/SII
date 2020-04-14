import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
//styles
import './styles/create_user_form.css';
//components
import Error from '../alerts/error';
//Hooks
import useFormValidation from '../hooks/useFormValidation';
import { stateSchemaStudent, validationSchemaStudent, disableSchema } from '../hooks/handleInputChange';
//Mutations
import { CREATE_STUDENT } from '../apolloclient/mutations';

const CreateUserStudentForm = () => {
    //Hook de validacion del Formulario.
    const [state, disable, handleOnChange] = useFormValidation(stateSchemaStudent, validationSchemaStudent, disableSchema);
    const [createStudent, {data, error, loading}] = useMutation(CREATE_STUDENT, {errorPolicy: 'all'});
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [err, setErr] = useState(false);

    const { firstname, lastname, enrollment, email, password, gender, confirmpassword } = state;

    useEffect(() => {
        if (confirmpassword.value !== password.value) {
            setConfirmPasswordError(true);
        } else {
            setConfirmPasswordError(false);
        }
    },[confirmpassword.value, password.value]);

    const confirmPasswordErrorSpan = confirmPasswordError ? <span className='span-error-input'>La contraseña no coincide.</span> : null;
    const errorSpan = err && disable.error? <Error error={disable.error}/> : null;
    const errorApollo = error ? <Error error={error.message}/> : null;
    
    //Cambia el valor del className que se encuentra en las etiquetas Input, si hay error son rojas de lo contrario no.
    const errorConfirmPassword = confirmpassword.error || confirmPasswordError ? 'input-register-error' : 'input-register';
    const errorGender = gender.error ? 'input-select-gender-error' : 'input-select-gender';

    //Agrega un Span para mostrarle al Usuario cual es el error en la etiqueta Input.
    const errorConfirmPasswordSpan = confirmpassword.error ? <span className='span-error-input'>{confirmpassword.error}</span> : '';

    if (error && error.networkError) {
        return (
            <div className='network-error'>{error.message}</div>
        )
    }

    return(
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={(e) => {
                    e.preventDefault();
                    if (disable.status) {
                        setErr(true);
                        return false;
                    } else {
                        setErr(false);
                    }
                    //Se ejecuta el Mutation, se le pasan los valores del Input como variables y envia el formulario.
                    createStudent({ variables: { input: {
                        firstname: firstname.value,
                        lastname: lastname.value,
                        enrollment: enrollment.value,
                        email: email.value,
                        password: password.value,
                        gender: gender.value
                    }}});
                }}>
                <div>
                    { errorSpan || errorApollo }
                </div>
                <div>
                    <input className={firstname.errorfield} placeholder='Nombre' type='text' name='firstname' value={firstname.value} onChange={handleOnChange}/>
                    {firstname.error && <Error error={firstname.error}/>}
                </div>
                <div>
                    <input className={lastname.errorfield} placeholder='Apellido' type='text' name='lastname' value={lastname.value} onChange={handleOnChange}/>
                    {lastname.error && <Error error={lastname.error}/>}
                </div>
                <div>
                    <input className={enrollment.errorfield} placeholder='Matricula' type='text' name='enrollment' value={enrollment.value} onChange={handleOnChange}/>
                    {enrollment.error && <Error error={enrollment.error}/>}
                </div>
                <div>
                    <input className={password.errorfield} placeholder='Contraseña' type='password' name='password' value={password.value} onChange={handleOnChange}/>
                    {password.error && <Error error={password.error}/>}
                </div>
                <div>
                    <input className={errorConfirmPassword} placeholder='Confirmar contraseña' type='password' value={confirmpassword.value} name='confirmpassword' onChange={handleOnChange}/>
                    {confirmPasswordErrorSpan || errorConfirmPasswordSpan}
                </div>
                <div>
                    <input className={email.errorfield} placeholder='Email' type='email' value={email.value} name='email' onChange={handleOnChange}/>
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

export default CreateUserStudentForm;