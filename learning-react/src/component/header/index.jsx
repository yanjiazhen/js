import React, { Component } from 'react'
import { nanoid } from 'nanoid'
export default class Header extends Component {
    handleKeyUp = (event) => {
        const { keyCode, target } = event
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        // 将todoObj传递给app
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        target.value = ''
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入运动项" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}
