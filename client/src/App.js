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
  console.log(sessionStudent)
  return (
      <Router>
        <div className='App-container'>
          <Switch>
            <Route exact path='/' render={() => <MainPage sessionStudent={sessionStudent} sessionTeacher={sessionTeacher}/>}/>
            <Route path='/teacher_login' render={(history) => <TeacherLogin 
                                                                currentUserTeacherRefetch={currentUserTeacherRefetch} 
                                                                history={history}/>}/>
            <Route path='/student_login' render={(history) => <StudentLogin 
                                                                currentUserStudentRefetch={currentUserStudentRefetch} 
                                                                history={history} 
                                                                sessionStudent={sessionStudent}/>}/>
            <Route path='/student_register' component={CreateUserStudent}/>
            <Route path='/teacher_register' component={CreateUserTeacher}/>
            <Route path='/teacher' component={TeacherPanel}/>
            <Route path='/student' render={() => <StudentPanel sessionStudent={sessionStudent}/>}/>
          </Switch>
        </div>
      </Router>
  )
}

export { App };