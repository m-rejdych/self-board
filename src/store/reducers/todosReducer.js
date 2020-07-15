import { TODOS } from '../constans';

const initialState = {
  todos: [],
  loading: false,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TODOS.DELETE_TODO:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
