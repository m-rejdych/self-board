import { CALENDAR } from '../constans';

const initialState = {
  currentDate: new Date().toDateString(),
  appointments: [],
  loading: false,
  error: null,
};

const calendarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CALENDAR.UPDATE_CALENDAR:
      return { ...state, appointments: payload };
    case CALENDAR.LOAD_APPOINTMENTS:
      return { ...state, loading: true };
    case CALENDAR.LOAD_APPOINTMENTS_SUCCESS:
      return { ...state, loading: false, error: null, appointments: payload };
    case CALENDAR.LOAD_APPOINTMENTS_FAIL:
      return { ...state, loading: false, error: payload };
    case CALENDAR.POST_APPOINTMENT:
      return { ...state, loading: true };
    case CALENDAR.POST_APPOINTMENT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        appointments: [
          ...state.appointments,
          { ...payload.appointment, id: payload.id },
        ],
      };
    case CALENDAR.POST_APPOINTMENT_FAIL:
      return { ...state, loading: false, error: payload };
    case CALENDAR.UPDATE_APPOINTMENT:
      return { ...state, loading: true };
    case CALENDAR.UPDATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        appointments: state.appointments.map((appointment) =>
          appointment.id === payload.id ? payload : appointment,
        ),
      };
    case CALENDAR.UPDATE_APPOINTMENT_FAIL:
      return { ...state, loading: false, error: payload };
    case CALENDAR.DELETE_APPOINTMENT:
      return { ...state, loading: true };
    case CALENDAR.DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        appointments: state.appointments.filter(
          (appointment) => appointment.id !== payload,
        ),
      };
    case CALENDAR.DELETE_APPOINTMENT_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default calendarReducer;
