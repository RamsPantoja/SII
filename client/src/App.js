import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Styles
import './App.css';
//Components
import MainPage from './page/main_page';
import StudentLogin from './page/login_student';
import DocentLogin from './page/login_docent';

const App = () => {
  return (
    <Router>
        <div className='App-container'>
          <Switch>
            <Route exact path='/main' component={MainPage}/>
            <Route exact path='/student_sign_in' component={StudentLogin}/>
            <Route exact path='/docent_sign_in' component={DocentLogin}/>
          </Switch>
        </div>
    </Router>
  )
}

export default App;
