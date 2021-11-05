// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/header'
import List from './component/list'
import Footer from './component/footer'
class Welcome extends React.Component {
  state = {
    todos: [
      { id: 0, name: '深蹲', done: true },
      { id: 1, name: '波比跳', done: true },
      { id: 2, name: '呀卧起坐', done: false }]
  }
  addTodo = (data) => {
    const { todos } = this.state
    const newData = [data, ...todos]
    this.setState({ todos: newData })
  }
  // 用于更新对象
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newObj = todos.map(todoObj => {
      if (todoObj.id === id) {
        return { ...todoObj, done: done }
      } else {
        return todoObj
      }
    })
    console.log(newObj)
    this.setState({ todos: newObj })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="fit_list">
        <h1>TodoList列表</h1>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} />
        <Footer />
      </div>
    );
  }
}
// import store from './store/store'
// import { incrementAction, decrementAction } from './store/count_action'

// import ReactDOM from 'react-dom';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// const list = ['波比跳', '深蹲']
// function Welcome(props) {
//   return (
//     <div>
//       <h2>运动列表</h2>
//       <ul>
//         {
//           list.map((item, ind) => {
//             return <li key={ind}>{item}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// state学习
// class Wheater extends React.Component {
//   state = { isHot: true }
//   render() {
//     // 读取状态
//     const { ishot } = this.state
//     return (<h2 onClick={this.clcikDemo}> 今天天气很{ishot ? 're' : 'leng'}</h2 >)
//   }
//   clcikDemo = () => {
//     // 作为onClick的回掉，此this非实例调用
//     // 类中的方法默认开启局部的严格模式,所以方法中的this为undefined
//     // console.log(this)
//     this.setState({ isHot: !this.state.isHot })
//   }
// }

// ReactDOM.render(<Wheater />, document.getElementById('root'))

// peops学习
// class Student extends React.Component {
//   // 类props传值属性类型限制
//   static propTypes = {
//     name: PropTypes.string.isRequired, // 设置为必须传递，且为string类型
//     age: PropTypes.number,
//     speak: PropTypes.func // 限制为函数
//   }
//     // 类props设置默认值
//   static defaultProps = {
//     age: 19, // 默认19岁
//   }
//   render() {
//     const { name, age } = this.props
//     return (
//       <ul>
//         <li>姓名：{name}</li>
//         <li>年龄：{age+1}</li>
//       </ul>
//     )
//   }
// }
// let p = {name:'yan', age:19}
// ReactDOM.render(<Student {...p}/>,document.getElementById('test'))

// refs学习
// class Demo extends React.Component {
//   state = { isHot: true }
//   myRef = React.createRef()
//   showDate = () => {
//     // const {input1} = this.refs
//     // const { input1 } = this // 回掉函数挂在组件实例上
//     //  React.createRef()容器方式，this.myRef.current.value
//     console.log(this.myRef.current.value)
//   }
//   changeWeater = () => {
//     const { isHot } = this.state
//     this.setState({ isHot: !isHot })
//   }
//   saveInput = (cur) => {
//     this.input1 = cur
//   }
//   render() {
//     const { isHot } = this.state
//     return (
//       <div>
//         <h1 onClick={this.showDate} >refs的学习</h1>
//         {/*<input ref={curNode => { this.input1 = curNode;console.log(this.input1) }} type="text" />*/}
//         {/*<input ref={this.saveInput} type="text" />*/}
//         <input ref={this.myRef} type="text" />
//         <p>今天天气很{isHot ? '炎热' : '凉爽'}</p>
//         <button onClick={this.changeWeater}>切换天气</button>
//       </div>

//     )
//   }
// }
// ReactDOM.render(<Demo />, document.getElementById('root'))


// // 受控组件非受控组件学习
// class Login extends React.Component {
//   handelSubmit = (e) => {
//     e.preventDefault()
//     console.log(this.state)
//   }
//   state = {
//     userName: '',
//     passWord: ''
//   }
//   // saveUsername = (e) => {
//   //   this.setState({ userName: e.target.value })
//   // }
//   // savePassword = (e) => {
//   //   this.setState({ passWord: e.target.value })

//   // }
//   // 这是初始化调用的值
//   saveFormData = (userType) => {
//     // 这个才是函数真正的回掉
//     return (e) => {
//       this.setState({ [userType]: e.target.value })
//     }
//   }
//   render() {
//     return (
//       <form action="" onSubmit={this.handelSubmit}>
//         用户名：<input type="text" onChange={this.saveFormData('userName')} name="username" />
//         密码：<input type="text" onChange={this.saveFormData('passWord')} />
//         <button>提交</button>
//       </form>
//     )
//   }
// }

// // 旧生命周期
// class Test extends React.Component {
//   render() {
//     console.log('Test---render')
//     return <div>name:{this.props.name}</div>
//   }
// }
// class Life extends React.Component {
//   constructor(props) {
//     console.log('Life---constructor')
//     super(props)
//     this.state = {
//       count: 1
//     }
//   }
//   // 从props派生的state
//   static getDerivedStateFromProps(){
//     console.log('Life-新生命周期getDerivdStateFromProps')
//     return null
//   }
//   getSnapshotBeforeUpdate(){
//     console.log('Life-新生命周期getSnapshotBeforeUpdate')
//     return null
//   }
//   // 组件即将挂载
//   // componentWillMount() {
//   //   console.log('Life---componentWillMount组件即将挂载--新react将要废弃')
//   // }
//   // 组件更新完毕
//   componentDidUpdate() {
//     console.log('Life---componentDidUpdate组件更新完毕')
//   }
//   // 组件即将卸载
//   componentWillUnmount() {
//     console.log('Life---componentWillUnmount组件即将卸载')

//   }
//   // 组件挂载完毕
//   componentDidMount() {
//     let time = setInterval(() => {
//       let { count } = this.state.count
//       this.setState({ count: count++ })
//     }, 1000)
//     setTimeout(() => {
//       clearInterval(time)
//     }, 5000)
//     console.log('Life---componentDidMount组件挂载完毕', this.state.count)
//   }
//   render() {
//     console.log('Life---render')
//     return (
//       <div>
//         <p>数字{this.state.count}</p>
//         <Test name="组件生命周期测试" />
//       </div>
//     )
//   }
// }

// redux
// class ReduxTest extends React.Component {
//   // debuger
//   componentDidMount() {
//     // console.log('store', store, store.getState())
//     store.subscribe(() => {
//       this.setState({})
//     })
//   }
//   increment = () => {
//     const { value } = this.selectNumber
//     store.dispatch(incrementAction(value*1))
//   }
//   decrement = () => {
//     const { value } = this.selectNumber
//     store.dispatch(decrementAction(value*1))
//   }
//   incrementIfOdd = () => {
//     const { value } = this.selectNumber
//     const data = store.getState()
//     if (data % 2 !== 0) {
//       store.dispatch(incrementAction(value*1))
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>计数：{store.getState()}</h1>
//         <select ref={c => this.selectNumber = c}>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//         </select>
//         <button onClick={this.increment}>加</button>
//         <button onClick={this.decrement}>减</button>
//         <button onClick={this.incrementIfOdd}>奇数加</button>
//       </div>
//     )

//   }
// }
export default Welcome;
