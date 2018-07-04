import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      { username: 'Grizzly'},
      { username: 'Kenny'},
      { username: 'Bernie'}
    ]
  }

  switchNameHandler = (event) =>{
    this.setState({
      usernames: [
        { username: event.target.value},
        { username: 'Kenny'},
        { username: 'Bernie'}
      ]
    })
  } 

  render() {
    return (
      <div className="App">
        <UserInput changed={this.switchNameHandler} username={this.state.usernames[0].username}/>
        <UserOutput username={this.state.usernames[0].username} />
        <UserOutput username={this.state.usernames[1].username} />
        <UserOutput username={this.state.usernames[2].username} />
      </div>
    );
  }
}

export default App;
