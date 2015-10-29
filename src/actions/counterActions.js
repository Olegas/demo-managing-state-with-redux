export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

export function incrementCounterForRoom(room) {
   return {
      type: INCREMENT_COUNTER,
      room: room
   };
}

export function resetCounterForRoom(room) {
   return {
      type: RESET_COUNTER,
      room: room
   }
}