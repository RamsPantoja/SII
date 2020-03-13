import React from 'react';

//Components
import CreateUserTeacherForm from '../components/create_user_teacher_form';

//Styles
import './styles/create_user.css';

const CreateUserTeacher = () => {
    return(
        <div className='register-container'>
            <div className='gradient-container'></div>
            <div className='register-form-container'>
                <h1>Crea tu cuenta</h1>
                <CreateUserTeacherForm/>
            </div>
        </div>
    )
}

export default CreateUserTeacher;