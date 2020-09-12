import React, { useCallback } from 'react';
import './styles/create_course_form.css';


const CreateCourseForm = ({handleOnChange, state, disable, handleOnChangeFile, createCourse}) => {
    const { coursename, section } = state;

    const handleOnSubmit = useCallback(
        (e) => {
            e.preventDefault();
            createCourse();
        },
        [createCourse]
    )

    return (
        <div className='add-course-form-container'>
            <form className='add-course-form-subcontainer' onSubmit={(e) => {handleOnSubmit(e)}}>
                <div className='img-icon'>
                    <i className='material-icons md-48'>class</i>
                </div>
                <h2>Nuevo curso</h2>
                <input placeholder='Nombre del curso' name='coursename' value={coursename.value} onChange={handleOnChange}/>
                <input placeholder='Seccion' name='section' value={section.value} onChange={handleOnChange}/>
                <div className='input-file-container'>
                    <div className='input-file-subcontainer'>
                        <input type='file' name='coverimg' onChange={handleOnChangeFile}/>
                        <span className="material-icons md-36">add_photo_alternate</span>
                    </div>
                </div>
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
export default CreateCourseForm;