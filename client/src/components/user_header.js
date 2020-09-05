import React from 'react';
import './styles/user_header.css';
import DropdownUser from './dropdown_user';

const UserHeader = ({sessionEntity, handleLogOutEntity}) => {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='title-panel'>
                    <i className='material-icons md-48'>engineering</i>
                    <h1>FIM</h1>
                </div>
                <div className='user-info'>
                    <DropdownUser 
                    sessionEntity={sessionEntity}
                    handleLogOutEntity={handleLogOutEntity}/>
                </div>
            </div>
        </header>
    )
}

export default UserHeader;