import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state = { mouse: false }
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    handleChange(id) {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }
    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state

        return (
            <li className="item" onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label htmlFor="">
                    <input type="checkbox" defaultChecked={done} onChange={this.handleChange(id)} />
                    <span>{name}</span>
                </label>
                <button style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
