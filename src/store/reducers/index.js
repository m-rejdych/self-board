import { combineReducers } from 'redux';

import todosReducer from './todosReducer';
import newsFeedReducer from './newsFeedReducer';
import calendarReducer from './calendarReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  newsFeed: newsFeedReducer,
  calendar: calendarReducer,
});

export default rootReducer;
