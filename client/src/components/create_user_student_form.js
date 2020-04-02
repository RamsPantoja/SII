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

    return(
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <div>{inputErr}</div>
                <div>
                    <input className='input-register' placeholder='Nombre' type='text' name='firstname' onChange={handleOnChange}/>
                </div>
                <div>
                    <input className='input-register' placeholder='Apellido' type='text' name='lastname' onChange={handleOnChange}/>
                </div>
                <div>
                    <input className='input-register' placeholder='Matricula' type='text' name='enrollment' onChange={handleOnChange}/>
                </div>
                <div>
                    <input className='input-register' placeholder='Usuario' type='text' name='username' onChange={handleOnChange}/>
                </div>
                <div>
                    <input className='input-register' placeholder='Password' type='password' name='password' onChange={handleOnChange}/>
                </div>
                <div>
                    <input className='input-register' placeholder='Email' type='email' name='email' onChange={handleOnChange}/>
                </div>
                <div>
                    <label className='label-register'>Sexo</label>
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