import { TODOS } from '../constans';

const addTodo = (todo) => ({
  type: TODOS.ADD_TODO,
  payload: todo,
});

export { addTodo };
