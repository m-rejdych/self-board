import { CALENDAR } from '../constans';

const updateCalendar = (updatedAppointments) => ({
  type: CALENDAR.UPDATE_CALENDAR,
  payload: updatedAppointments,
});

export { updateCalendar };
