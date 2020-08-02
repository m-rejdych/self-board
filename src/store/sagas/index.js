import { all } from 'redux-saga/effects';
import { setLoadNews } from './newsFeedSagas';
import { setAuth } from './authSagas';
import {
  setPostTodo,
  setLoadTodos,
  setDeleteTodo,
  setPatchCheckTodo,
} from './todosSagas';

function* rootSaga() {
  yield all([
    setLoadNews(),
    setAuth(),
    setPostTodo(),
    setLoadTodos(),
    setDeleteTodo(),
    setPatchCheckTodo(),
  ]);
}

export default rootSaga;
