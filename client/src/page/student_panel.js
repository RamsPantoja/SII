import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//StudentComponents
import Inf from '../components/student_components/inf';
import Subjects from '../components/student_components/subjects';
import StudentDrawer from '../components/student_components/student_drawer';

const StudentPanel = () => {
    return (
        <Router>
            <div>
                <h1>Hola mundo S</h1>
                <StudentDrawer/>
                <div>
                    <Switch>
                        <Route path='/student/inf' component={Inf}/>
                        <Route path='/student/subjects' component={Subjects}/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default StudentPanel;