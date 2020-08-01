import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { AUTH } from '../constans';
import { authSuccess, authFail } from '../actions';

function* handleAuth({ payload: { userData, loginMode, history, name } }) {
  try {
    const url = loginMode
      ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBCUgkZX5IwmgKLxNxPIQaP7eQbD2VHKf4'
      : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBCUgkZX5IwmgKLxNxPIQaP7eQbD2VHKf4';
    const response = yield axios.post(url, userData);
    const { email, idToken, refreshToken, expiresIn, localId } = response.data;
    yield put(
      authSuccess({
        email,
        name,
        token: idToken,
        refreshToken,
        expirationTime: expiresIn,
        userId: localId,
      }),
    );
    history.push('/dashboard');
  } catch (error) {
    yield put(authFail(error.message));
  }
}

function* setAuth(action) {
  yield takeEvery(AUTH.AUTH, handleAuth);
}

export { setAuth };
