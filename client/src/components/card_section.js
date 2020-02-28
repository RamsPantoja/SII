import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//styles
import './styles/card_section.css';

const CardSection = ({img, description, buttonIn, section, to}) => {
    return (
        <div className='cardSection-subcontainer'>
            <img src={img} width='100px' height='100px'></img>
            <h1>{section}</h1>
            <p>{description}</p>
            <Link className='link' to={to}>
                <button type='button' className='newStyle-button'>{buttonIn}</button>
            </Link>
        </div>
    )
}

export default CardSection;
