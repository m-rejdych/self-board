import { combineReducers } from 'redux';

import todosReducer from './todosReducer';
import newsFeedReducer from './newsFeedReducer';
import calendarReducer from './calendarReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  newsFeed: newsFeedReducer,
  calendar: calendarReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
