import React, { Fragment } from 'react';

const Error = ({error}) => {
    return (
        <Fragment>
            <span className='span-err'>{error}</span>
        </Fragment>
    )
}

export default Error;