import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
//components
import CreateUserStudentForm from '../components/create_user_student_form';
import ValidatorEmail from '../components/validator_email';
//Hooks
import useFormValidation from '../hooks/useFormValidation';
import { stateSchemaStudent, validationSchemaStudent, disableSchema } from '../hooks/handleInputChange';
//styles
import './styles/create_user.css';
//Mutations
import { CREATE_STUDENT } from '../apolloclient/mutations';

const CreateUserStudent = () => {
    const [state, disable, handleOnChange] = useFormValidation(stateSchemaStudent, validationSchemaStudent, disableSchema);
    const { firstname, lastname, enrollment, email, password, gender} = state;
    const [onCompleted, setOnCompleted] = useState(); 

    const [createStudent, {data, loading, error}] = useMutation(CREATE_STUDENT, {
        ignoreResults:false,
        variables: {input: {
            firstname: firstname.value,
            lastname: lastname.value,
            enrollment: enrollment.value,
            email: email.value,
            password: password.value,
            gender: gender.value
        }},
        onCompleted: (data) => {
            setOnCompleted(data.createStudent);
        }
    });

    if (onCompleted) {
        return (
            <ValidatorEmail data={onCompleted}
            to={'/student/login'}/>
        )
    }

    return (
        <div className='register-container'>
            <div className='gradient-container'>
            </div>
            <div className='register-form-container'>
                <h1>Crea tu cuenta</h1>
                <CreateUserStudentForm 
                    createStudent={createStudent}
                    state={state}
                    disable={disable}
                    handleOnChange={handleOnChange}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    )
}

export default CreateUserStudent;