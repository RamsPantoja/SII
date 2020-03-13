import React from 'react';
import { useMutation } from '@apollo/react-hooks';
//styles
import './styles/create_user_form.css';
//Hooks
import { useHandleInputChange } from '../hooks/useHandleInputChange';
//Mutations
import { CREATE_STUDENT } from '../apolloclient/mutations';

const CreateUserStudentForm = () => {
    const [input, handleInputChange] = useHandleInputChange();
    const [createStudent, {data}] = useMutation(CREATE_STUDENT);

    return(
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={e => {
                    e.preventDefault();
                    createStudent({variables: {input: input}})
                }}>
                <div>
                    <label>Nombre<input className='input-register' type='text' name='firstname' onChange={handleInputChange}/></label>
                </div>
                <div>
                    <label>Apellido<input className='input-register' type='text' name='lastname' onChange={handleInputChange}/></label> 
                </div>
                <div>
                    <label>Matricula<input className='input-register' type='text' name='matricula' onChange={handleInputChange}/></label>
                </div>
                <div>
                    <label>Nombre de Usuario<input className='input-register' type='text' name='username' onChange={handleInputChange}/></label>
                </div>
                <div>
                    <label>Password<input className='input-register' type='password' name='password' onChange={handleInputChange}/></label>
                </div>
                <div>
                    <label>Email<input className='input-register' type='email' name='email' onChange={handleInputChange}/></label> 
                </div>
                <div>
                    <label>Sexo</label>
                    <select className='input-select-gender' name='gender' onChange={handleInputChange}>
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