import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Styles
import './App.css';
//Components
import MainPage from './page/main_page';
import StudentLogin from './page/login_student';
import TeacherLogin from './page/login_teacher';
import CreateUserStudent from './page/create_user_student';
import CreateUserTeacher from './page/create_user_teacher';

const App = ({refetchStudent, sessionStudent, refetchTeacher, sessionTeacher}) => {
  console.log(sessionStudent);
  return (
      <Router>
        <div className='App-container'>
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/student/login' render={() => <StudentLogin refetchStudent={refetchStudent}/>}/>
            <Route exact path='/teacher/login' component={TeacherLogin}/>
            <Route exact path='/student/register' component={CreateUserStudent}/>
            <Route exact path='/teacher/register' component={CreateUserTeacher}/>
          </Switch>
        </div>
      </Router>
  )
}

export { App };