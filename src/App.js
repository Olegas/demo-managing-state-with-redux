import React from 'react';
import Rooms from './components/Rooms';
import Chat from './components/Chat';
import Login from './components/Login';
import { connect } from 'react-redux';

import Server from './Server';
import { loginUserAction } from './actions/loginActions.js';

class App extends React.Component {
  login(userName)
  {
    this.props.dispatch(loginUserAction(userName));

    this.server = new Server();
    this.server.onMessage = (f,c,m) => this.handleMessage(f,c,m);
    this.server.onListChats = (l) => this.handleList(l);
  }

  send(msg)
  {
    this.server.send(this.props.userName, this.props.room, msg);
  }


  selectRoom(room)
  {
    this.setState({
      room,
      messages: []
    });

    this.server.getLog(room, (messages) => this.setState({messages}));
  }

  handleList(rooms)
  {
    console.log('rooms', rooms);
    this.setState({rooms});
    this.selectRoom(rooms[0]);
  }

  handleMessage(from, room, msg)
  {
    console.log(from, room, msg);
    
    if(room != this.props.room)
      return;

    var messages = this.props.messages;
    messages.push({from, msg});

    this.setState({messages});
  }

  render() {
    if(this.props.userName == null)
      return <Login onLogin={(n) => this.login(n)} />

    return <div id='app'>
      <Rooms room={this.props.room} items={this.props.rooms} onSelect={(r) => this.selectRoom(r)} />
      <Chat items={this.props.messages} user={this.props.userName} onSend={(m) => this.send(m)} />
    </div>
  }
}

export default connect((state) => {
  return {...state}
})(App);