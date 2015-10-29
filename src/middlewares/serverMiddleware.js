import Server from '../Server';
import { SEND_MESSAGE, ROOMS_LIST } from '../actions/serverActions';
import { SELECT_ROOM, selectRoomAction } from '../actions/roomActions';
import { LOGIN_USER } from '../actions/loginActions';

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
         if (action.type == LOGIN_USER) {
            server.getRooms();
         }
         if (action.type == ROOMS_LIST) {
            store.dispatch(selectRoomAction(action.rooms[0]));
         }
         next(action);
      }
   }
}