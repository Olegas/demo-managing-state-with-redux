export const SELECT_ROOM = 'SELECT_ROOM';

export function selectRoomAction(room) {
   return {
      type: SELECT_ROOM,
      room: room
   };
}