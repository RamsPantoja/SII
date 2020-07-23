import React, { Fragment } from 'react';
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom';
//styles
import './styles/student_panel.css';

//StudentComponents
import Docs from '../components/student_components/docs';
import Subjects from '../components/student_components/subjects';
import SchoolGrades from '../components/student_components/school_grades';
import PickSubjects from '../components/student_components/pick_subjects';
import SchoolSchedule from '../components/student_components/school_schedule';
import StudentDrawer from '../components/student_components/drawer/student_drawer';
import StudentHeader from '../components/student_components/header/student_header';

const StudentPanel = ({sessionStudent}) => {
    const { path, url} = useRouteMatch();
    const { getUserStudentAuth } = sessionStudent;
    const isStudentAuth = getUserStudentAuth ?  null : <Redirect to='/student_login'/>

    const handleLogOutStudent = (e, client) => {
        e.preventDefault();
        localStorage.removeItem('token', '')
        client.resetStore();
    }

    return (
        <Fragment>
            {isStudentAuth}
            <div className='panel-container'>
                <StudentDrawer url={url}/>
                <StudentHeader 
                sessionStudent={sessionStudent}
                handleLogOutStudent={handleLogOutStudent}/>
                <div className='panel-content'>
                    <div className='panel-content-container'>
                        <Switch>
                            <Route exact path={`${path}`}>
                                <h1>Inicio</h1>
                            </Route>
                            <Route path={`${path}/docs`} component={Docs}/>
                            <Route path={`${path}/pick_subjects`} component={PickSubjects}/>
                            <Route path={`${path}/subjects`} component={Subjects}/>
                            <Route path={`${path}/school_grades`} component={SchoolGrades}/>
                            <Route path={`${path}/school_schedule`} component={SchoolSchedule}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default StudentPanel;