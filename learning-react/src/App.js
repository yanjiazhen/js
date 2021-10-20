import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
const list = ['波比跳', '深蹲']
function Welcome(props) {
  return (
    <div>
      <h2>运动列表</h2>
      <ul>
        {
          list.map((item, ind) => {
            return <li key={ind}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

export default Welcome;
