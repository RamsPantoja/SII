import React, { useState, useEffect } from 'react'
import './styles/dropdown_user.css';
import DropdownContent from './dropdown_content';

const DropdownUser = ({sessionEntity, handleLogOutEntity}) => {
    const { getUserStudentAuth, getUserTeacherAuth } = sessionEntity;
    const [ dropdown, setDropdown ] = useState(false);
    const [ backgroundButton, setBackgroundButton ] = useState(false);

    const whichUser = (getUserStudentAuth, getUserTeacherAuth) => {
        let whichUserIs;
        if (getUserStudentAuth) {
            whichUserIs = getUserStudentAuth
        } else {
            whichUserIs = getUserTeacherAuth
        }
        return whichUserIs
    }

    const isUserAuth = whichUser(getUserStudentAuth, getUserTeacherAuth);
    const userEmailAuth = isUserAuth ? isUserAuth.email : <span>NoUser</span>
    const isDropdown = dropdown ? <DropdownContent handleLogOutEntity={handleLogOutEntity}/> : null;
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
                    {userEmailAuth}
                </div>
            </button>
            {isDropdown}
        </div>
    )
}

export default DropdownUser;