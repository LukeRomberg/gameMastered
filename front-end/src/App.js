import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {x: 0, y: 0 };
    }


  _onMouseClick(e) {
    console.log("e", e, 'screenX: ', e.screenX, "screenY: ", e.screenY)
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    const { x, y } = this.state;
    return (
      <div className="App">
        <div onClick={this._onMouseClick.bind(this)}>
          <h1>Game = Mastered</h1>
          <h1>Mouse coordinates: { x } { y }</h1>
        </div>;
      </div>
    );
  }
}

export default App;
