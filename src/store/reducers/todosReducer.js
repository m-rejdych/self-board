import { TODOS } from '../constans';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS.UPDATE_TODOS:
      return { todos: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
