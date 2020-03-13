import React from 'react';

//components
import CreateUserStudentForm from '../components/create_user_student_form';

//styles
import './styles/create_user.css';

const CreateUserStudent = () => {
    return (
        <div className='register-container'>
            <div className='gradient-container'>
            </div>
            <div className='register-form-container'>
                <h1>Crea tu cuenta</h1>
                <CreateUserStudentForm/>
            </div>
        </div>
    )
}

export default CreateUserStudent;