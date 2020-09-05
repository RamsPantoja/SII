import React, { Fragment } from 'react';
import { Redirect, useRouteMatch, Route, Switch } from 'react-router-dom';
import './styles/user_panel.css'

//Components 
import UserDrawer from '../components/user_drawer'
import UserHeader from '../components/user_header'
import Courses from '../components/teacher_components/courses';
import { dataTeacher } from '../components/teacher_components/sections_teacher_data';

const TeacherPanel = ({sessionTeacher}) => {
    const { path, url } = useRouteMatch();
    const { getUserTeacherAuth } = sessionTeacher;
    const isTeacherAuth = getUserTeacherAuth ? null : <Redirect to='/teacher_login'/>

    const handleLogOutTeacher = (e, client) => {
        e.preventDefault();
        localStorage.removeItem('token', '')
        client.resetStore()
    }

    return (
        <Fragment>
            {isTeacherAuth}
            <div className='panel-container'>
                <UserDrawer url={url} dataSections={dataTeacher}/>
                <UserHeader sessionEntity={sessionTeacher}
                handleLogOutEntity={handleLogOutTeacher}/>
                <div className='panel-content'>
                    <div className='panel-content-container'>
                        <Switch>
                            <Route exact path={`${path}`}>
                                <h1>Inicio</h1>
                            </Route>
                            <Route path={`${path}/courses`} component={Courses}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TeacherPanel;