// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
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
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
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
class Demo extends React.Component {
  showDate = ()=>{
    // const {input1} = this.refs
    // const {input1} = React.createRef()
    // console.log(React.createRef())
  }
  render() {
    return (
      <div>
        <h1 onClick={this.showDate} >refs的学习</h1>
        <input ref="input1" type="text" />
      </div>

    )
  }
}
// ReactDOM.render(<Demo />, document.getElementById('root'))
export default Demo;
