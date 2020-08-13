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
const authResetError = () => ({
  type: AUTH.RESET_ERROR,
});
const logout = () => ({
  type: AUTH.LOGOUT,
});

export { auth, authFail, authSuccess, authResetError, logout };
