import React, { Component } from 'react';

export default class AddToDo extends Component {
    render() {
        return (
            <div>
                <input value = { this.props.todoInput } onChange={ this.props.handleInput } />
                <button onClick={this.props.handleClick}>What do you need to do?</button>
            </div>
        )
    }
}