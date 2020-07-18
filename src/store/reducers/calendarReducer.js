import { CALENDAR } from '../constans';

const initialState = {
  currentDate: new Date().toDateString(),
  appointments: [],
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALENDAR.UPDATE_CALENDAR:
      return { ...state, appointments: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
