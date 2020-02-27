import React from 'react';
import TodoApp from './ToDoApp.js';
import './App.css';
import TodoAppLogin from './todoAppLogin.js'
import { 
  BrowserRouter, 
  Route, 
  Redirect,
  Switch,
} from 'react-router-dom';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header>
          Just Keep Going!
        </header>
        <body>
        <BrowserRouter>
        <Route path='/' render={() =>
        isLoggedIn()
        ? <TodoApp />
        : <Redirect to='login' />
        }/>
        <Route path='/login' component={TodoAppLogin} />
        </BrowserRouter>
        </body>
      </div>
    );
  }
}