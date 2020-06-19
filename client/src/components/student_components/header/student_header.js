import React from 'react';
import './student_header.css';

const StudentHeader = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='title-panel'><h1>FIM: Estudiante</h1></div>
                <div className='user-info'>
                    <p>UserInfo</p>
                </div>
            </div>
        </header>
    )
}

export default StudentHeader;