import { TODOS } from '../constans';

const addTodo = (todo) => ({
  type: TODOS.ADD_TODO,
  payload: todo,
});

const deleteTodo = (todos) => ({
  type: TODOS.DELETE_TODO,
  payload: todos,
});

export { addTodo, deleteTodo };
