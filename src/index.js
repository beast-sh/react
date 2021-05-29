import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*var element = React.createElement('h1', { style: { color: "red" } }, 'Hello, world!');

var ele=React.createElement('form',{})

ReactDOM.render(
  element,
  document.getElementById('root')
);

class Welcome extends React.Component {
  render() {
    return React.createElement(
      "h1",
      { style: { color: "red" } },
      `Welcome to ${this.props.name}`
    );
  }
}

ReactDOM.render(
  React.createElement(Welcome, { name: "Home page" }, null),
  document.querySelector("#root")
);
*/
/*class Login extends React.Component{
  render(){
    return (
    <center>
<form  >
      <h1>LOGIN </h1>
    <label>
      Name:
      <input type="text"  />
    </label>
    <br></br>
    <label>
      Password:
      <input type="password"  />
    </label>
    <br></br>
    <input type="submit"  />
  </form>
    </center>
    
    );
  }
}

ReactDOM.render(<Login />,document.querySelector('#root'));
*/

/*class Flavors extends React.Component {
 
  render() {
    return (
      <form >
        <label>
          Pick your favorite flavor:
          <select >
          <option value="">Select</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <Flavors />,
  document.getElementById('root')
);*/
function Time() {
  const element = (
    <div>
      <h1>Hello, Current Time</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(Time, 1000);

reportWebVitals();
