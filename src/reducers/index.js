import { LOGIN_USER } from '../actions/loginActions.js';
import { SELECT_ROOM } from '../actions/roomActions.js';
import { ROOMS_LIST, MESSAGE_IN_ROOM, FULL_LOG } from '../actions/serverActions.js';

import { combineReducers } from 'redux';

function userReducer(state=null, action) {
   if (action.type == LOGIN_USER) {
      return action.userName;
   }
   return state;
}

function roomReducer(state=null, action) {
   if (action.type == SELECT_ROOM) {
      return action.room;
   }
   return state;
}

function roomListReducer(state=[], action) {
   if (action.type == ROOMS_LIST) {
      return action.rooms;
   }
   return state;
}

function messagesReducer(state=[], action) {
   if (action.type == MESSAGE_IN_ROOM) {
      return [...state, action.data];
   }
   if (action.type == FULL_LOG) {
      return action.log;
   }
   return state;
}

export default combineReducers({
   room: roomReducer,
   userName: userReducer,
   rooms: roomListReducer,
   messages: messagesReducer,
   counters: (state=null) => state
});