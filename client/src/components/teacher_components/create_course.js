import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/create_course.css';

const CreateCourse = () => {
    const [ addCourseEvent, setAddCourseEvent ] = useState(false)

    const handleOnClick = (e) => {
        e.preventDefault();
        setAddCourseEvent(true)
    }

    if (addCourseEvent) {
        return (
            <div className='add-course-form-container'>
                <div className='add-course-form-subcontainer'>
                    <div>
                        <i className='material-icons md-48'>class</i>
                    </div>
                    <h2>Nuevo curso</h2>
                    <input placeholder='Nombre del curso'/>
                    <input placeholder='Seccion'/>
                    <input type='file'/>
                    <button type='submit'>Crear</button>
                </div>
            </div>
        )
    }

    return (
        <div className='add-course-container'>
            <div className='add-course-subcontainer'>
                <div className='add-course-subcontainer-flex-column'>
                    <button onClick={(e) => handleOnClick(e)}><span className="material-icons md-48">add_circle_outline</span></button>
                    <p>Crear un nuevo curso</p>
                </div>
            </div>
        </div>
    )
}

export default CreateCourse;