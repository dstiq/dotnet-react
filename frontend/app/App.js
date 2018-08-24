import React, { Component } from 'react';
import Sidebar from './components/Sidebar/index';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="split">
          <div className="sidebarsContainer">
            <Sidebar store={this.props.store} />
          </div>
          <div className="tableContainer">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
