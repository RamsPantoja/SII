import React, { Fragment } from 'react';

const Error = ({error}) => {
    return (
        <Fragment>
            <span className='span-error-input'>{error}</span>
        </Fragment>
    )
}

export default Error;