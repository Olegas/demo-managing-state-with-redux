export const LOGIN_USER = 'LOGIN_USER';

export function loginUserAction(userName) {
   return {
      type: LOGIN_USER,
      userName: userName
   };
}