import { TODOS } from '../constans';

const updateTodos = (updatedTodos) => ({
  type: TODOS.UPDATE_TODOS,
  payload: updatedTodos,
});

export { updateTodos };
