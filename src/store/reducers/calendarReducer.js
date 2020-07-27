import { CALENDAR } from '../constans';

const initialState = {
  currentDate: new Date().toDateString(),
  appointments: [],
};

const calendarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CALENDAR.UPDATE_CALENDAR:
      return { ...state, appointments: payload };
    default:
      return state;
  }
};

export default calendarReducer;
