import { LOGIN_USER } from '../actions/loginActions.js';


export default function(state, action) {
   var {userName, ...restState} = state;
   if (action.type == LOGIN_USER) {
      return Object.assign({}, restState, { userName: action.userName });
   }
   return state;
}