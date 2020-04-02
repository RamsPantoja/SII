import React from 'react';
import { useMutation } from '@apollo/react-hooks';

//Styles
import './styles/create_user_form.css';

//Hooks


//Mutations
import { CREATE_TEACHER } from '../apolloclient/mutations';

const CreateUserTeacherForm = () => {
    const [createTeacher, {data}] = useMutation(CREATE_TEACHER);

    return (
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={
                    (e) => {
                        e.preventDefault();
                    }}>
                <div>
                    <label>Nombre<input type='text' className='input-register' name='firstname' /></label>
                </div>
                <div>
                    <label>Apellido<input type='text' className='input-register' name='lastname' /></label>
                </div>
                <div>
                    <label>Password<input type='password' className='input-register' name='password' /></label>
                </div>
                <div>
                    <label>Email<input type='email' className='input-register' name='email' /></label>
                </div>
                <div>
                    <label>Sexo</label>
                    <select className='input-select-gender' name='gender' >
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

export default CreateUserTeacherForm;