import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
//Mutations
import {CREATE_TEACHER} from '../apolloclient/mutations';
//Components
import CreateUserTeacherForm from '../components/create_user_teacher_form';
import ValidatorEmail from '../components/validator_email';
//Hooks
import useFormValidation from '../hooks/useFormValidation';

//Styles
import './styles/create_user.css';
import { stateSchemaTeacher, validationSchemaTeacher, disableSchema } from '../hooks/handleInputChange';

const CreateUserTeacher = () => {
    const [state, disable, handleOnChange] = useFormValidation(stateSchemaTeacher, validationSchemaTeacher, disableSchema);
    const { firstname, lastname, password, email, gender } = state;
    const [onCompleted, setOnCompleted] = useState();
    const [createTeacher, {data, loading, error}] = useMutation(CREATE_TEACHER, {
        variables: { input: {
            firstname: firstname.value,
            lastname: lastname.value,
            password: password.value,
            email: email.value,
            gender: gender.value
        }},
        onCompleted: (data) => {
            setOnCompleted(data.createTeacher);
        }
    });
    if (onCompleted) {
        return (
            <ValidatorEmail data={onCompleted}
            to={'/teacher/login'}/>
        )
    }
    return(
        <div className='register-container'>
            <div className='gradient-container'></div>
            <div className='register-form-container'>
                <h1>Crea tu cuenta</h1>
                <CreateUserTeacherForm
                state={state}
                disable={disable}
                loading={loading}
                error={error}
                handleOnChange={handleOnChange}
                createTeacher={createTeacher}/>
            </div>
        </div>
    )
}

export default CreateUserTeacher;