import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles/dropdown_content.css';
import { ApolloConsumer } from '@apollo/client'

const handleLogOutStudent = (e, client, history) => {
    e.preventDefault();
    localStorage.removeItem('token', '')
    client.resetStore();
    history.push('/')
}

const DropdownContent = ({history}) => (
    <ApolloConsumer>
    { client => {
        return (
            <ul className='dropdown-content'>
                <li><Link className='dropdown-link'>Cuenta</Link></li>
                <li><Link className='dropdown-link' onClick={(e) => handleLogOutStudent(e, client, history)}>Cerrar sesion</Link></li>
            </ul>
        )
    }}
    </ApolloConsumer>

)

export default DropdownContent;