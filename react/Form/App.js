import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  handleNameSubmit = (name) => {
    alert('A name was submitted: ' + name);
  }

  render() {
    return (
      <div className="App">
        <h1>React Form Example with Validation</h1>
        <Form onSubmit={this.handleNameSubmit} />
      </div>
    );
  }
}

export default App;
