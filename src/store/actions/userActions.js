import { USER } from '../constans';

const setLoginMode = (loginMode) => ({
  type: USER.SET_LOGIN_MODE,
  payload: loginMode,
});

export { setLoginMode };
