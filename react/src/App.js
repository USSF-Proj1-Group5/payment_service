import logo from './logo.svg';
import './App.css';
import React from 'react'
import BalancesTable from './BalancesTable';
import Transactions from './Transactions'

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
    return (<div className="">
          <header className="">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.state.title}
            </p>
          </header>
          <BalancesTable type='user' />
          <BalancesTable type='contractor' />
          <Transactions />
        </div>)
  }
    
  
}

export default App;
