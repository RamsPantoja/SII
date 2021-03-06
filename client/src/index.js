import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App'
import RootSession from './components/root_session';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, concat} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client';

const httpLink = new createUploadLink({uri: 'http://localhost:8200/graphql'});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  //enviar token al servidor
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

ReactDOM.render(<ApolloProvider client={client}><RootSession Component={App}/></ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
