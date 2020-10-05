import React, { useState } from 'react';
import CreateCourseForm from './create_course_form';
import './styles/create_course.css';
import useFormValidationCourse from '../../hooks/useFormValidationCourse';
import { stateSchemaCreateCourse, disableSchema, validationSchemaCreateCourse } from '../../hooks/handleInputChange';
import { CREATE_COURSE } from '../../apolloclient/mutations';
import { useMutation } from '@apollo/client';


const CreateCourse = () => {
    const [ state, disable, handleOnChange, handleOnChangeFile] = useFormValidationCourse(stateSchemaCreateCourse, validationSchemaCreateCourse, disableSchema);
    const { coursename, section, coverimg} = state;
    const [ addCourseEvent, setAddCourseEvent ] = useState(false);
    const [ createCourse, {data, loading, error}] = useMutation(CREATE_COURSE, {
        variables: {
            input: {
                coursename: coursename.value,
                section: section.value
            },
            coverimg: coverimg.file
        }
    })

    const handleOnClick = (e) => {
        e.preventDefault();
        setAddCourseEvent(true)
    }

    if (addCourseEvent) {
        return (
            <CreateCourseForm 
                handleOnChange={handleOnChange}
                state={state}
                disable={disable}
                handleOnChangeFile={handleOnChangeFile}
                createCourse={createCourse}
                errorMutation={error}/>
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