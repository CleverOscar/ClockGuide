import React from 'react';
import './App.css';
import Clock from './guides/Clock/clock.js'

class App extends React.Component{
  render() {
      return (
        <div className="App">
          <h1 className="title">React Practice</h1>
          <Clock />
        </div>
    );
  }
}

export default App;
