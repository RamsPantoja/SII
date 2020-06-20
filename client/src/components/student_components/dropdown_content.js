import React from 'react'
import { Link } from 'react-router-dom'
import './styles/dropdown_content.css';

const DropdownContent = ({url}) => {
    return (
        <ul className='dropdown-content'>
            <li><Link>Cuenta</Link></li>
            <li><Link>Cerrar sesion</Link></li>
        </ul>
    )
}

export default DropdownContent;