import { all } from 'redux-saga/effects';
import { loadNews } from './newsFeedSagas';

function* rootSaga() {
  yield all([loadNews()]);
}

export default rootSaga;
