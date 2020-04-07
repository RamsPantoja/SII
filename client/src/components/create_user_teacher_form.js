import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

//Styles
import './styles/create_user_form.css';

//Hooks
import useFormValidation from '../hooks/useFormValidation';
import { stateSchemaTeacher, validationSchemaTeacher } from '../hooks/handleInputChange';

//Mutations
import { CREATE_TEACHER } from '../apolloclient/mutations';

const CreateUserTeacherForm = () => {
    const [createTeacher, {data}] = useMutation(CREATE_TEACHER);
    const [state, disable, handleOnChange] = useFormValidation(stateSchemaTeacher, validationSchemaTeacher);
    const [err, setErr] = useState(false);

    const errSpan = err ?  <span className='span-err'>Todos los campos son obligatorios</span> : null;

    const { firstname, lastname, password, confirmpassword, email, gender } = state;

    return (
        <div className='register-form-subcontainer'>
            <form className='register-form-subcontainer-grid'
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        if (disable) {
                            setErr(true);
                            return false;
                        } else {
                            setErr(false);
                        }
                        createTeacher({variables: { input: {
                            firstname: firstname.value,
                            lastname: lastname.value,
                            password: password.value,
                            email: email.value,
                            gender: gender.value
                        }}});
                    }}>
                <div>{errSpan}</div>           
                <div>
                    <input placeholder='Nombre' type='text' className='input-register' name='firstname' value={firstname.value} onChange={handleOnChange}/>
                </div>
                <div>
                   <input placeholder='Apellido' type='text' className='input-register' name='lastname' value={lastname.value} onChange={handleOnChange}/>
                </div>
                <div>
                    <input placeholder='Contraseña' type='password' className='input-register' name='password' value={password.value} onChange={handleOnChange}/>
                </div>
                <div>
                    <input placeholder='Confirmar contraseña' type='password' className='input-register' name='confirmpassword' value={confirmpassword.value} onChange={handleOnChange}/>
                </div>
                <div>
                    <input placeholder='Email' type='email' className='input-register' name='email' value={email.value} onChange={handleOnChange}/>
                </div>
                <div>
                    <select className='input-select-gender' name='gender' value={gender.value} onChange={handleOnChange}>
                        <option value=''>Sexo</option>
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