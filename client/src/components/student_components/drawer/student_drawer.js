import React from 'react';
import { NavLink } from 'react-router-dom'

import './student_drawer.css';


const StudentDrawer = ({url}) => {
    return (
        <div className='drawer'>
            <div className='drawer-container'>
                <nav>
                    <ul className='link-list'>
                        <li><NavLink activeStyle={{color:'#000000'}} className='link-to-section' to={`${url}/docs`}><i className='material-icons md-36'>text_snippet</i><div className='topic-container'>Recursos Didacticos</div></NavLink></li>
                        <li><NavLink activeStyle={{color:'#000000'}} className='link-to-section' to={`${url}/subjects`}><i className='material-icons md-36'>list</i><div className='topic-container'>Carga Academica</div></NavLink></li>
                        <li><NavLink activeStyle={{color:'#000000'}} className='link-to-section' to={`${url}/pick_subjects`}><i className='material-icons md-36'>assignment_turned_in</i><div className='topic-container'>Seleccion de Materias</div></NavLink></li>
                        <li><NavLink activeStyle={{color:'#000000'}} className='link-to-section' to={`${url}/school_grades`}><i className='material-icons md-36'>history_edu</i><div className='topic-container'>Calificaciones</div></NavLink></li>
                        <li><NavLink activeStyle={{color:'#000000'}} className='link-to-section' to={`${url}/school_schedule`}><i className='material-icons md-36'>table_chart</i><div className='topic-container'>Horario Escolar</div></NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default StudentDrawer;