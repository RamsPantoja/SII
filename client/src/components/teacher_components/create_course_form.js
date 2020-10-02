import React, { useCallback, useState } from 'react';
import './styles/create_course_form.css';
import Error from '../../alerts/error';

const CreateCourseForm = ({handleOnChange, state, disable, handleOnChangeFile, createCourse}) => {
    const { coursename, section } = state;
    const [error, setError] = useState(false);

    const errorSpan = error ? <Error error={disable.error}/> : null;

    const handleOnSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if(disable.status) {
                setError(true)
                return false
            } else{
                setError(false)
                createCourse();
            }
        },
        [createCourse]
    );

    return (
        <div className='add-course-form-container'>
            <form className='add-course-form-subcontainer' onSubmit={(e) => {handleOnSubmit(e)}}>
                <div className='img-icon'>
                    <i className='material-icons md-48'>class</i>
                </div>
                <h2>Nuevo curso</h2>
                {errorSpan}
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