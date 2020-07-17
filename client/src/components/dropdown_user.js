import React, { useState, useEffect } from 'react'
import './styles/dropdown_user.css';
import DropdownContent from './student_components/dropdown_content';

const DropdownUser = ({sessionEnity}) => {
    const { getUserStudentAuth } = sessionEnity;
    const [ dropdown, setDropdown ] = useState(false);
    const isUserAuth = getUserStudentAuth ? getUserStudentAuth.email : <span>NoUser</span>

    const isDropdown = dropdown ? <DropdownContent/> : null;

    const handleOnClick = (e) => {
        e.preventDefault();
        if (dropdown === true) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    useEffect(() => {
        window.onclick = (e) => {
            let clickOutside = e.target;
            if (clickOutside && dropdown === true) {
                setDropdown(false)
            }
        }
    });

    return (
        <div className='dropdown-container'>
            <button type='button'className='dropdown-button' onClick={(e) => {handleOnClick(e)}}>
                <div className='usericon-dropdown'>
                    <i className='material-icons md-24'>account_circle</i>
                </div>
                <div className='user-dropdown'>
                    {isUserAuth}
                </div>
            </button>
            {isDropdown}
        </div>
    )
}

export default DropdownUser;