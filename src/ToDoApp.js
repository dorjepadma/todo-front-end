import React, { Component } from 'react'
import AddToDo from './addToDo.js';
import request from 'superagent';

export default class TodoApp extends Component {
    state = { todos: [] }
    componentDidMount = async() => {
        
        const todos = await request.get(`https://nameless-caverns-43737.herokuapp.com/api/todos`)
        

        console.log(todos.body)
        this.setState({ todos: todos.body })
    }

    handleClick = async () => {
        const newTodo = {
           //this is the fake todo?
            id: Math.random(),
            task: this.state.todoInput,
            complete: false,
        };

        const user = JSON.parse(localStorage.getItem('user'));


        const newTodos = [...this.state.todos, newTodo];

        this.setState({ todos: newTodos });
        const data = await request.post(`https://nameless-caverns-43737.herokuapp.com/api/todos`, {
            task: this.state.todoInput
        })
            .set('Authorization', user.token);
    }

    handleInput = (e) => { this.setState({ todoInput: e.target.value })};
    
    render() {
        if (localStorage.getItem('user')) {
        return (
            <div>
                <h3>Good Day {JSON.parse(localStorage.getItem('user')).email}</h3>
                <AddToDo 
                todoInput={ this.state.todoInput } 
                handleClick={ this.handleClick } 
                handleInput={ this.handleInput } 
            />
                {
                    this.state.todos.map((todo) => <p 
                        style={{
                            textDecoration: todo.complete ? 'line-through' : 'none'
                        }}
                        onClick={async () => {
                            // lets mutate! make a copy of the array in state
                        const newTodos = this.state.todos.slice();
                            // go find whichever todo we're talking about here
                        const matchingTodo = newTodos.find((thisTodo) => todo.id === thisTodo.id);

                        matchingTodo.complete = !todo.complete
                        const user = JSON.parse(localStorage.getItem('user'));
                        
                        this.setState({ todos: newTodos });
                        const data = await request.put(`https://nameless-caverns-43737.herokuapp.com/api/todos/${todo.id}`, matchingTodo)
                        .set('Authorization', user.token);
                    }} key={todo.id}>
                        {todo.task}
                    </p>)
                }
            </div>
        )
            }
    }
}
