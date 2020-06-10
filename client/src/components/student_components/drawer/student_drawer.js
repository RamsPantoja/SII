import React from 'react';
import { NavLink } from 'react-router-dom'

import './student_drawer.css';


const StudentDrawer = ({url}) => {
    return (
        <div className='drawer'>
            <div className='drawer-container'>
                <nav>
                    <ul className='link-list'>
                        <li><NavLink className='link-to-section' to={`${url}/docs`}><i className='material-icons md-48'>text_snippet</i>Recursos didacticos</NavLink></li>
                        <li><NavLink className='link-to-section' to={`${url}/subjects`}><i className='material-icons md-48'>list</i>Carga academica</NavLink></li>
                        <li><NavLink className='link-to-section' to={`${url}/pick_subjects`}><i className='material-icons md-48'>assignment_turned_in</i>Seleccion de materias</NavLink></li>
                        <li><NavLink className='link-to-section' to={`${url}/school_grades`}><i className='material-icons md-48'>history_edu</i>Calificaciones</NavLink></li>
                        <li><NavLink className='link-to-section' to={`${url}/school_schedule`}><i className='material-icons md-48'>table_chart</i>Horario escolar</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default StudentDrawer;