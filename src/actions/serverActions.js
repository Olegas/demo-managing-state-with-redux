export const ROOMS_LIST = 'ROOMS_LIST';
export const MESSAGE_IN_ROOM = 'MESSAGE_IN_ROOM';
export const FULL_LOG = 'FULL_LOG';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export function roomListReceived(rooms) {
   return {
      type: ROOMS_LIST,
      rooms: rooms
   };
}

export function messageReceived(from, room, message) {
   return {
      type: MESSAGE_IN_ROOM,
      data: {
         msg: message,
         from: from,
         room: room
      }
   }
}

export function fullLogReceived(log) {
   return {
      type: FULL_LOG,
      log: log
   }
}

export function sendMessageAction(from, room, text) {
   return {
      type: SEND_MESSAGE,
      from: from,
      room: room,
      msg: text
   }
}