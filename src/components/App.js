import React, { Component } from 'react';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hola</h2>
        <TaskList title='test'></TaskList>
      </div>
    );
  }
  
}

export default App;
