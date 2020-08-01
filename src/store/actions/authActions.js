import { AUTH } from '../constans';

const auth = (payload) => ({ type: AUTH.AUTH, payload });
const authSuccess = (userData) => ({
  type: AUTH.AUTH_SUCCESS,
  payload: userData,
});
const authFail = (error) => ({
  type: AUTH.AUTH_FAIL,
  payload: error,
});
const authResetError = () => ({ type: AUTH.RESET_ERROR });

export { auth, authFail, authSuccess, authResetError };
