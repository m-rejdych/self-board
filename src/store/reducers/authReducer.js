import { AUTH } from '../constans';

const initialState = {
  email: '',
  token: '',
  refreshToken: '',
  expirationTime: '',
  userId: '',
  error: null,
  loading: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH.AUTH:
      return { ...state, loading: true };
    case AUTH.AUTH_SUCCESS:
      return { ...state, loading: false, ...payload };
    case AUTH.AUTH_FAIL:
      return { ...state, loading: false, error: payload };
    case AUTH.RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default authReducer;
