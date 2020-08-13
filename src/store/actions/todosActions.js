import { TODOS } from '../constans';

const updateTodos = (updatedTodos) => ({
  type: TODOS.UPDATE_TODOS,
  payload: updatedTodos,
});
const postTodo = (todoInfo) => ({
  type: TODOS.POST_TODO,
  payload: todoInfo,
});
const postTodoSuccess = (todo) => ({
  type: TODOS.POST_TODO_SUCCESS,
  payload: todo,
});
const postTodoFail = (error) => ({
  type: TODOS.POST_TODO_FAIL,
  payload: error,
});
const loadTodos = (userData) => ({
  type: TODOS.LOAD_TODOS,
  payload: userData,
});
const loadTodosSuccess = (todos) => ({
  type: TODOS.LOAD_TODOS_SUCCESS,
  payload: todos,
});
const loadTodosFail = (error) => ({
  type: TODOS.LOAD_TODOS_FAIL,
  payload: error,
});
const deleteTodo = (data) => ({
  type: TODOS.DELETE_TODO,
  payload: data,
});
const deleteTodosSuccess = (id) => ({
  type: TODOS.DELETE_TODO_SUCCESS,
  payload: id,
});
const deleteTodosFail = (error) => ({
  type: TODOS.DELETE_TODO_FAIL,
  payload: error,
});
const checkTodo = (todos) => ({
  type: TODOS.CHECK_TODO,
  payload: todos,
});
const patchCheckTodo = (data) => ({
  type: TODOS.PATCH_CHECK_TODO,
  payload: data,
});
const patchCheckTodoSuccess = (todo) => ({
  type: TODOS.PATCH_CHECK_TODO_SUCCESS,
  payload: todo,
});
const patchCheckTodoFail = (error) => ({
  type: TODOS.PATCH_CHECK_TODO_FAIL,
  payload: error,
});

export {
  updateTodos,
  postTodo,
  postTodoSuccess,
  postTodoFail,
  loadTodos,
  loadTodosSuccess,
  loadTodosFail,
  deleteTodo,
  deleteTodosSuccess,
  deleteTodosFail,
  checkTodo,
  patchCheckTodo,
  patchCheckTodoSuccess,
  patchCheckTodoFail,
};
