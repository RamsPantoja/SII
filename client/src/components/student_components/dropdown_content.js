import React from 'react'
import { Link } from 'react-router-dom'
import './styles/dropdown_content.css';

const DropdownContent = ({url}) => {
    return (
        <ul className='dropdown-content'>
            <li><Link className='dropdown-link'>Cuenta</Link></li>
            <li><Link className='dropdown-link'>Cerrar sesion</Link></li>
        </ul>
    )
}

export default DropdownContent;