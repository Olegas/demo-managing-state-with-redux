import React from 'react';
import Rooms from './components/Rooms';
import Chat from './components/Chat';
import Login from './components/Login';
import { connect } from 'react-redux';

import Server from './Server';
import { loginUserAction } from './actions/loginActions.js';
import { sendMessageAction } from './actions/serverActions.js';
import { selectRoomAction } from './actions/roomActions.js';

class App extends React.Component {

  send(msg)
  {
    this._server.send(this.props.userName, this.props.room, msg);
  }

  componentDidMount() {
    this._server = new Server(this.props.dispatch);
  }

  selectRoom(room) {
    this.props.dispatch(selectRoomAction(room));
    this._server.getLog(room);
  }

  render() {
    var { dispatch } = this.props;
    if(this.props.userName == null)
      return <Login onLogin={(n) => dispatch(loginUserAction(n))} />;

    return <div id='app'>
      <Rooms room={this.props.room} items={this.props.rooms} onSelect={(r) => this.selectRoom(r)} />
      <Chat items={this.props.messages} user={this.props.userName} onSend={(m) => this.send(m)} />
    </div>
  }
}

export default connect((state) => {
  return {...state}
})(App);