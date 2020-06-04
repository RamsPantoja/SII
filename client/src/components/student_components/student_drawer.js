import React from 'react';
import { Link } from 'react-router-dom'

const StudentDrawer = () => {
    return (
        <div>
            <ul>
                <li><Link to='/student/inf'>Perfil</Link></li>
                <li><Link to='/student/subjects'>Materias</Link></li>
            </ul>
        </div>
    )
}

export default StudentDrawer;