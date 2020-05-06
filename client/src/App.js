import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  { ApolloClient }  from 'apollo-client'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloLink, from } from 'apollo-link';
//Styles
import './App.css';
//Components
import MainPage from './page/main_page';
import StudentLogin from './page/login_student';
import TeacherLogin from './page/login_teacher';
import CreateUserStudent from './page/create_user_student';
import CreateUserTeacher from './page/create_user_teacher';
import SessionStudent from './components/session_student';

const httpLink = new HttpLink({uri: 'http://localhost:8200/graphql', credentials: 'same-origin'});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token')
    }
  }));

  return forward(operation);
});

const client = new ApolloClient({
  link: from([
    authMiddleware,
    httpLink
  ]),
  cache: new InMemoryCache(),
  //enviar token al servidor
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

const App = ({refetch, session}) => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App-container'>
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/student/login' component={StudentLogin}/>
            <Route exact path='/teacher/login' component={TeacherLogin}/>
            <Route exact path='/student/register' component={CreateUserStudent}/>
            <Route exact path='/teacher/register' component={CreateUserTeacher}/>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

const RootSessionStudent = SessionStudent(App);

export { RootSessionStudent };