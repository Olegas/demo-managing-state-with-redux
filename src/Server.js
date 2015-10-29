import { roomListReceived, messageReceived, fullLogReceived } from './actions/serverActions.js';


export default class Server
{
  constructor(dispatch)
  {
    this.server = window.io('http://'+document.location.hostname+':8088');

    this.server.on('new', (m) => dispatch(messageReceived(m.from, m.room, m.msg)));
    this.server.on('log', (m) => dispatch(fullLogReceived(m)));
    this.server.on('list', (m) => dispatch(roomListReceived(m)));

    console.log('Server: Подключаюсь');
  }

  send(from, room, msg)
  {
    this.server.emit('msg', {from, room, msg});
  }

  getLog(room) {
    this.server.emit('getlog', room);
  }

}