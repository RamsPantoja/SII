import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
//Styles
import './App.css';
//Components
import MainPage from './page/main_page';
import StudentLogin from './page/login_student';
import TeacherLogin from './page/login_teacher';
import CreateUserStudent from './page/create_user_student';
import CreateUserTeacher from './page/create_user_teacher';
import TeacherPanel from './page/teacher_panel';
import StudentPanel from './page/student_panel';

const App = ({currentUserStudentRefetch, sessionStudent, currentUserTeacherRefetch, sessionTeacher}) => {
  return (
      <Router>
        <div className='App-container'>
          <Switch>
            <Route exact path='/' render={() => <MainPage sessionStudent={sessionStudent}/>}/>
            <Route exact path='/student/login' render={(history) => <StudentLogin currentUserStudentRefetch={currentUserStudentRefetch} history={history}/>}/>
            <Route exact path='/teacher/login' render={(history) => <TeacherLogin currentUserTeacherRefetch={currentUserTeacherRefetch} history={history}/>}/>
            <Route exact path='/student/register' component={CreateUserStudent}/>
            <Route exact path='/teacher/register' component={CreateUserTeacher}/>
            <Route exact path='/teacher' component={TeacherPanel}/>
            <Route exact path='/student' component={StudentPanel}/>
          </Switch>
        </div>
      </Router>
  )
}

export { App };