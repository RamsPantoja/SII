import React, { useState, useEffect } from 'react'
import './styles/dropdown_user.css';
import DropdownContent from './student_components/dropdown_content';
import { useHistory } from 'react-router-dom';

const DropdownUser = ({sessionEntity, handleLogOutStudent}) => {
    const { getUserStudentAuth } = sessionEntity;
    const [ dropdown, setDropdown ] = useState(false);
    const [ backgroundButton, setBackgroundButton ] = useState(false);
    
    const isUserAuth = getUserStudentAuth ? getUserStudentAuth.email : <span>NoUser</span>
    const isDropdown = dropdown ? <DropdownContent handleLogOutStudent={handleLogOutStudent}/> : null;
    const isBackGroundButton = backgroundButton ? '#80cbc4' : '';

    const handleOnClickDropDown = (e) => {
        e.preventDefault();
        if (dropdown === false) {
            setBackgroundButton(true)
            setDropdown(true)
        } else {
            setBackgroundButton(false)
            setDropdown(false)
        }
    }

    useEffect(() => {
        window.onclick = (e) => {
            let clickOutside = e.target;
            if (clickOutside && dropdown === true) {
                setDropdown(false)
                setBackgroundButton(false)
            }
        }
    });

    return (
        <div className='dropdown-container'>
            <button type='button'className='dropdown-button' style={{background:isBackGroundButton}} onClick={(e) => {handleOnClickDropDown(e)}}>
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