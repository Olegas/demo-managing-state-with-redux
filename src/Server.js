import { roomListReceived, messageReceived, fullLogReceived } from './actions/serverActions.js';


export default class Server
{
  constructor(store)
  {
    this.server = window.io('http://'+document.location.hostname+':8088');

    this.server.on('new', (m) => store.dispatch(messageReceived(m.from, m.room, m.msg)));
    this.server.on('log', (m) => store.dispatch(fullLogReceived(m)));
    this.server.on('list', (m) => store.dispatch(roomListReceived(m)));

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