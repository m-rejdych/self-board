import { TODOS } from '../constans';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODOS.UPDATE_TODOS:
      return { todos: payload };
    default:
      return state;
  }
};

export default todosReducer;
