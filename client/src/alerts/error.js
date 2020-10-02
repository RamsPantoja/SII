import React, { Fragment } from 'react';
import './error.css';

const Error = ({error}) => {
    return (
        <Fragment>
            <span className='span-error-input'>{error}</span>
        </Fragment>
    )
}

export default Error;