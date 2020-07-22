import React from 'react'
import { Link } from 'react-router-dom'
import './styles/dropdown_content.css';

const DropdownContent = ({currentUserStudentClient}) => {
    const handleOnClickLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token', '')
        currentUserStudentClient.resetStore()
    }
    return (
        <ul className='dropdown-content'>
            <li><Link className='dropdown-link'>Cuenta</Link></li>
            <li><Link className='dropdown-link' onClick={(e) => {handleOnClickLogOut(e)}}>Cerrar sesion</Link></li>
        </ul>
    )
}

export default DropdownContent;