import React from 'react';
import './styles/create_course_form.css';


const CreateCourseForm = ({handleOnChange, state, disable}) => {
    const { coursename, section } = state;

    return (
        <div className='add-course-form-container'>
            <div className='add-course-form-subcontainer'>
                <div>
                    <i className='material-icons md-48'>class</i>
                </div>
                <h2>Nuevo curso</h2>
                <input placeholder='Nombre del curso' name='coursename' value={coursename.value} onChange={handleOnChange}/>
                <input placeholder='Seccion' name='section' value={section.value} onChange={handleOnChange}/>
                <input type='file'/>
                <button type='submit'>Crear</button>
            </div>
        </div>
    )
}

export default CreateCourseForm;