import { LOGIN_USER } from '../actions/loginActions.js';
import { SELECT_ROOM } from '../actions/roomActions.js';
import { ROOMS_LIST, MESSAGE_IN_ROOM, FULL_LOG } from '../actions/serverActions.js';


export default function(state, action) {

   if (action.type == LOGIN_USER) {
      let {userName, ...restState} = state;
      return Object.assign({}, restState, { userName: action.userName });
   }
   if (action.type == SELECT_ROOM) {
      let {room, ...restState} = state;
      return Object.assign({}, restState, { room: action.room });
   }
   if (action.type == ROOMS_LIST) {
      let {room, rooms, ...restState} = state;
      if (room == null) {
         room = action.rooms[0];
      }
      rooms = action.rooms;
      return Object.assign({}, restState, { room, rooms });
   }
   if (action.type == MESSAGE_IN_ROOM) {
      let { messages, ...restState} = state;
      messages = [...messages, action.data];
      return Object.assign({}, restState, { messages });
   }
   if (action.type == FULL_LOG) {
      let { messages, ...restState} = state;
      return Object.assign({}, restState, { messages: action.log });
   }
   return state;
}