import { all } from 'redux-saga/effects';
import { loadNews } from './newsFeedSagas';
import { setAuth } from './authSagas';

function* rootSaga() {
  yield all([loadNews(), setAuth()]);
}

export default rootSaga;
