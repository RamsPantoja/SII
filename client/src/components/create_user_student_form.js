import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
//styles
import './styles/create_user_form.css';
//Hooks
import useFormValidation from '../hooks/useFormValidation';
//Mutations
import { CREATE_STUDENT } from '../apolloclient/mutations';

const CreateUserStudentForm = () => {
    //const [input, handleInputChange] = useHandleInputChange();
    const [state, disable, handleOnChange ] = useFormValidation();
    const [createStudent, {data}] = useMutation(CREATE_STUDENT);
    const [err, setErr] = useState(false);

    const stateSchema = {
        firstname: { value:'', error: ''},
        lastname: { value: '', error: ''},
        username: { value: '', error: ''},
        email: { value: '', error: ''},
        matricula: { value: '', error: ''},
        password: { value: '', error: ''},
        gender: { value: '', error: ''}
    }

    const validationSchema = {
        firstname: {
            required: true,
            validator: {
                regEx: /^[a-zA-Z]+$/,
                error: 'Invalid first name format'
            }
        },
        lastname: {
            required: true,
            validator: {
                regEx: /^[a-zA-Z]+$/,
                error: 'Invalid last name format'
            }
        },
        user
    }

    let inputErr = err ? <span className='span-err'>Todos los campos son obligatorios</span> : '';

    return(
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <div>{inputErr}</div>
                <div>
                    <label>Nombre<input className='input-register' type='text' name='firstname' onChange={handleOnChange}/></label>
                </div>
                <div>
                    <label>Apellido<input className='input-register' type='text' name='lastname' onChange={handleOnChange}/></label> 
                </div>
                <div>
                    <label>Matricula<input className='input-register' type='text' name='matricula' onChange={handleOnChange}/></label>
                </div>
                <div>
                    <label>Nombre de Usuario<input className='input-register' type='text' name='username' onChange={handleOnChange}/></label>
                </div>
                <div>
                    <label>Password<input className='input-register' type='password' name='password' onChange={handleOnChange}/></label>
                </div>
                <div>
                    <label>Email<input className='input-register' type='email' name='email' onChange={handleOnChange}/></label> 
                </div>
                <div>
                    <label>Sexo</label>
                    <select className='input-select-gender' name='gender' onChange={handleOnChange}>
                        <option value=''>Elegir...</option>
                        <option value='HOMBRE'>HOMBRE</option>
                        <option value='MUJER'>MUJER</option>
                    </select>
                </div>
                <button type='submit' className='button-submit'>Crear</button>
            </form>
        </div>
    )
}

export default CreateUserStudentForm;