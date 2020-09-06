import React, { Fragment } from 'react';
import CreateCourse from './create_course';
import './styles/courses.css';

const Courses = () => {
    return (
        <Fragment>
            <h1>Cursos</h1>
            <div className='course-container'>
                <CreateCourse/>
            </div>
        </Fragment>
    )
}

export default Courses;