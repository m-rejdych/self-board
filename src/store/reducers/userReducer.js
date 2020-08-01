import { USER } from '../constans';

const initialState = {
  loginMode: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER.SET_LOGIN_MODE:
      return { ...state, loginMode: payload };
    default:
      return state;
  }
};

export default userReducer;
