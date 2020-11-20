import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    }
  }
  async componentDidMount() {
    const response = await fetch(`http://localhost:3001/ping`);
    console.log(response);
    const json = await response.json();
    console.log(json)
    this.setState({title: json});
  }
  render(){
    return (<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.state.title}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>)
  }
    
  
}

export default App;
