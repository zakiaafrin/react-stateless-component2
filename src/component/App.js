import React, { Component } from 'react';
import './App.css';   // style
import Example from './Example';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Example name='Stateless Component' />
      </div>
    );
  }
}
export default App;