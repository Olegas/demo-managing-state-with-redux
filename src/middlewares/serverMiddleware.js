import Server from '../Server';
import { SEND_MESSAGE } from '../actions/serverActions';
import { SELECT_ROOM } from '../actions/roomActions';

export default (store) => {
   var server = new Server(store);
   return (next) => {
      return (action) => {
         if (action.type == SEND_MESSAGE) {
            server.send(action.from, action.room, action.msg);
         }
         if (action.type == SELECT_ROOM) {
            server.getLog(action.room);
         }
         next(action);
      }
   }
}