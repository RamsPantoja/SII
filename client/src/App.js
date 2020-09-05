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
import TeacherPanel from './page/teacher_panel';
import StudentPanel from './page/student_panel';

const App = ({currentUserStudentRefetch, sessionStudent, currentUserTeacherRefetch, sessionTeacher}) => {
  return (
      <Router>
        <div className='App-container'>
          <Switch>
            <Route exact path='/'>
              <MainPage 
                sessionStudent={sessionStudent} 
                sessionTeacher={sessionTeacher}/>
            </Route>
            <Route path='/teacher_login'>
              <TeacherLogin 
                currentUserTeacherRefetch={currentUserTeacherRefetch}
                sessionTeacher={sessionTeacher}/>
            </Route>
            <Route path='/student_login'>
              <StudentLogin 
                currentUserStudentRefetch={currentUserStudentRefetch}
                sessionStudent={sessionStudent}/>
            </Route>
            <Route path='/student_register' component={CreateUserStudent}/>
            <Route path='/teacher_register' component={CreateUserTeacher}/>
            <Route path='/teacher_panel'>
              <TeacherPanel sessionTeacher={sessionTeacher}/>
            </Route>
            <Route path='/student_panel'>
              <StudentPanel 
                sessionStudent={sessionStudent}/>
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export { App };