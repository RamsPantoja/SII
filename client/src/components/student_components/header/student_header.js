import React from 'react';
import './student_header.css';
import DropdownUser from '../../dropdown_user';

const StudentHeader = ({sessionStudent}) => {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='title-panel'>
                    <i className='material-icons md-48'>engineering</i>
                    <h1>FIM</h1>
                </div>
                <div className='user-info'>
                    <DropdownUser sessionEnity={sessionStudent}/>
                </div>
            </div>
        </header>
    )
}

export default StudentHeader;