import React from 'react';
import TodoApp from './ToDoApp.js';
import './App.css';
import { 
  BrowserRouter, 
  Route, 
  Redirect,
  Switch,
} from 'react-router-dom';

// const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header>
          Just Keep Going!
        </header>
        {/* <BrowserRouter>
        <Route pathe='/' render={() =>
        isLoggedIn()
        ? <TodoApp />
        : <Redirect to='login' />
        }/>
        <Route pathe='/login' component={TodoAppLogin} />
        </BrowserRouter> */}
      </div>
    );
  }
}