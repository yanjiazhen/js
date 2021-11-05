import React, { Component } from 'react'
import Item from '../item'
export default class List extends Component {

    render() {
        const { todos, updateTodo } = this.props
        return (
            <ul>
                {todos.map(todo => <Item key={todo.id} {...todo} updateTodo={updateTodo} />)}
            </ul>
        )
    }
}
