import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Swapi from './Swapi';


class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }

  update(e){
    this.setState({txt: e.target.value})
  }

  render() {
    const dynamicInput = {
      margin: '0.5em',
      color: 'black'
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <FormInput update={this.update.bind(this)}/>
          <h1 style={dynamicInput}>{this.state.txt}</h1>
        </div>
        <Swapi />
      </div>
    );
  }
}


const FormInput = (props) =>
<input type="text" onChange={props.update} />

export default App;
