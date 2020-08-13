import { put, takeEvery } from 'redux-saga/effects';

import axios from '../../axiosFirebase';
import {
  postTodoSuccess,
  postTodoFail,
  loadTodosSuccess,
  loadTodosFail,
  deleteTodosSuccess,
  deleteTodosFail,
  patchCheckTodoSuccess,
  patchCheckTodoFail,
} from '../actions';
import { TODOS } from '../constans';

function* handlePostTodo({ payload: { token, userId, todo } }) {
  try {
    yield axios.put(`/todos/${todo.id}.json?auth=${token}`, {
      todo: todo.todo,
      checked: todo.checked,
      userId,
    });
    yield put(postTodoSuccess(todo));
  } catch (error) {
    yield put(postTodoFail(error.message));
  }
}

function* handleLoadTodos({ payload: { userId, token } }) {
  try {
    const query = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    const response = yield axios.get(`/todos.json${query}`);
    const keys = Object.keys(response.data);
    const todos = keys.map((key) => ({
      id: key,
      todo: response.data[key].todo,
      checked: response.data[key].checked,
    }));
    yield put(loadTodosSuccess(todos));
  } catch (error) {
    yield put(loadTodosFail(error.message));
  }
}

function* handleDeleteTodo({ payload: { id, token } }) {
  try {
    yield axios.delete(`/todos/${id}.json?auth=${token}`);
    yield put(deleteTodosSuccess(id));
  } catch (error) {
    yield put(deleteTodosFail(error.message));
  }
}

function* handlePatchCheckTodo({ payload: { checked, id, token } }) {
  try {
    yield axios.patch(`/todos/${id}.json?auth=${token}`, { checked });
    yield put(patchCheckTodoSuccess({ checked, id }));
  } catch (error) {
    yield put(patchCheckTodoFail(error.message));
  }
}

function* setPostTodo(action) {
  yield takeEvery(TODOS.POST_TODO, handlePostTodo);
}

function* setLoadTodos(action) {
  yield takeEvery(TODOS.LOAD_TODOS, handleLoadTodos);
}

function* setDeleteTodo(action) {
  yield takeEvery(TODOS.DELETE_TODO, handleDeleteTodo);
}

function* setPatchCheckTodo(action) {
  yield takeEvery(TODOS.PATCH_CHECK_TODO, handlePatchCheckTodo);
}

export { setPostTodo, setLoadTodos, setDeleteTodo, setPatchCheckTodo };
