import { combineReducers } from 'redux';

import todosReducer from './todosReducer';
import newsFeedReducer from './newsFeedReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  newsFeed: newsFeedReducer,
});

export default rootReducer;
