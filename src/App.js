import React from 'react';
import Rooms from './components/Rooms';
import Chat from './components/Chat';
import Login from './components/Login';
import { connect } from 'react-redux';

import { loginUserAction } from './actions/loginActions.js';
import { sendMessageAction } from './actions/serverActions.js';
import { selectRoomAction } from './actions/roomActions.js';

class App extends React.Component {

  send(msg)
  {
    this.props.dispatch(sendMessageAction(this.props.userName, this.props.room, msg));
  }

  render() {
    var { dispatch } = this.props;
    if(this.props.userName == null)
      return <Login onLogin={(n) => dispatch(loginUserAction(n))} />;

    return <div id='app'>
      <Rooms
         counters={this.props.counters}
         room={this.props.room}
         items={this.props.rooms}
         onSelect={(r) => dispatch(selectRoomAction(r))} />
      <Chat items={this.props.messages} user={this.props.userName} onSend={(m) => this.send(m)} />
    </div>
  }
}

export default connect((state) => {
  return {...state}
})(App);