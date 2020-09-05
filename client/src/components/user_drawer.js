import React from 'react';
import { NavLink } from 'react-router-dom'

import './styles/user_drawer.css';


const UserDrawer = ({url, dataSections}) => {
    const sections = dataSections.map((item) => {
        return (
            <li key={item.id}>
                <NavLink activeStyle={{color:'#000000', background:'#4f9a94'}} className='link-to-section' to={`${url}/${item.path}`}>
                    <i className='material-icons md-24'>{item.icon}</i><div className='topic-container'>{item.section}</div>
                </NavLink>
            </li>
        )
    })
    return (
        <div className='drawer'>
            <div className='drawer-container'>
                <nav>
                    <ul className='link-list'>
                        {sections}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default UserDrawer;