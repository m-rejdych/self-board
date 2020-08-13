import { TODOS } from '../constans';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODOS.UPDATE_TODOS:
      return { ...state, todos: payload };
    case TODOS.POST_TODO:
      return { ...state, loading: true };
    case TODOS.POST_TODO_SUCCESS:
      return { error: null, loading: false, todos: [...state.todos, payload] };
    case TODOS.POST_TODO_FAIL:
      return { ...state, loading: false, error: payload };
    case TODOS.LOAD_TODOS:
      return { ...state, loading: true };
    case TODOS.LOAD_TODOS_SUCCESS:
      return { ...state, loading: false, error: null, todos: payload };
    case TODOS.LOAD_TODOS_FAIL:
      return { ...state, loading: false, error: payload };
    case TODOS.DELETE_TODO:
      return { ...state, loading: true };
    case TODOS.DELETE_TODO_SUCCESS:
      return {
        error: null,
        loading: false,
        todos: state.todos.filter(({ id }) => id !== payload),
      };
    case TODOS.DELETE_TODO_FAIL:
      return { ...state, loading: false, error: payload };
    case TODOS.CHECK_TODO:
      return { ...state, todos: payload };
    case TODOS.PATCH_CHECK_TODO:
      return { ...state, loading: true };
    case TODOS.PATCH_CHECK_TODO_SUCCESS:
      return {
        error: null,
        loading: false,
        todos: state.todos.map((todo) =>
          payload.id === todo.id ? { ...todo, checked: payload.checked } : todo,
        ),
      };
    case TODOS.PATCH_CHECK_TODO_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default todosReducer;
