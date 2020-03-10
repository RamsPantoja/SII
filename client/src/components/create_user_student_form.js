import React from 'react';

//styles
import './styles/create_user_student_form.css';
//Hooks
import { useHandleInputChange } from '../hooks/useHandleInputChange';

const CreateUserStudentForm = () => {
    const [input, handleInputChange ] = useHandleInputChange();

    return(
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'>
                <div>
                    <label>Nombre<input className='input-register' name='firstname' onChange={handleInputChange}/></label>
                </div>
                <div>
                    <label>Apellido<input className='input-register' name='lastname' onChange={handleInputChange}/></label> 
                </div>
                <div>
                    <label>Matricula<input className='input-register' name='matricula' onChange={handleInputChange}/></label>
                </div>
                <div>
                    <label>Nombre de Usuario<input className='input-register' name='username' onChange={handleInputChange}/></label>
                </div>
                <div>
                    <label>Password<input className='input-register' name='password' onChange={handleInputChange}/></label>
                </div>
                <div>
                    <label>Email<input className='input-register' name='email' onChange={handleInputChange}/></label> 
                </div>
                <div>
                    <label>Genero<input className='input-register' name='gender'/></label>
                </div>
                <button type='submit' className='button-submit'>Enviar</button>
            </form>
        </div>
    )
}

export default CreateUserStudentForm;