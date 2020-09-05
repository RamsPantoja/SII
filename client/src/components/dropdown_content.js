import React from 'react'
import { Link } from 'react-router-dom'
import './styles/dropdown_content.css';
import { ApolloConsumer } from '@apollo/client'


const DropdownContent = ({handleLogOutEntity}) => {

    const handleOnClick = (e, client) => {
        handleLogOutEntity(e, client);
    }
    
    return (
        <ApolloConsumer>
            { client => {
                return (
                    <ul className='dropdown-content'>
                        <li><Link className='dropdown-link'>Cuenta</Link></li>
                        <li><Link className='dropdown-link' onClick={(e) => handleOnClick(e, client)}>Cerrar sesion</Link></li>
                    </ul>
                )
            }}
        </ApolloConsumer>
    )

}

export default DropdownContent;