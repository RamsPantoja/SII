import React from 'react';
import { Link } from 'react-router-dom';
import './styles/validator_email.css';

const ValidatorEmail = ({data, to}) => {
    return (
        <div className='validator-email-container'>
            <div className='validator-email-subcontainer'>
                <p>{data}</p>
                <p>Una vez confirmado tu email, puedes iniciar sesion aqui:<Link to={to}>Click aqui</Link></p>
            </div>
        </div>
    )
}

export default ValidatorEmail;