import React, { useState } from 'react';

import CreateCourseForm from './create_course_form';
import './styles/create_course.css';
import useFormValidationCourse from '../../hooks/useFormValidationCourse';
import { stateSchemaCreateCourse, disableSchema, validationSchemaCreateCourse } from '../../hooks/handleInputChange';

const CreateCourse = () => {
    const [ state, disable, handleOnChange ] = useFormValidationCourse(stateSchemaCreateCourse, validationSchemaCreateCourse, disableSchema)
    const [ addCourseEvent, setAddCourseEvent ] = useState(false);

    const handleOnClick = (e) => {
        e.preventDefault();
        setAddCourseEvent(true)
    }

    if (addCourseEvent) {
        return (
            <CreateCourseForm 
                handleOnChange={handleOnChange}
                state={state}
                disable={disable}/>
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