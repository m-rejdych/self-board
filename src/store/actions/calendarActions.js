import { CALENDAR } from '../constans';

const updateCalendar = (updatedAppointments) => ({
  type: CALENDAR.UPDATE_CALENDAR,
  payload: updatedAppointments,
});
const loadAppointments = (data) => ({
  type: CALENDAR.LOAD_APPOINTMENTS,
  payload: data,
});
const loadAppointmentsSuccess = (appointments) => ({
  type: CALENDAR.LOAD_APPOINTMENTS_SUCCESS,
  payload: appointments,
});
const loadAppointmentsFail = (error) => ({
  type: CALENDAR.LOAD_APPOINTMENTS_FAIL,
  payload: error,
});
const postAppointment = (data) => ({
  type: CALENDAR.POST_APPOINTMENT,
  payload: data,
});
const postAppointmentSuccess = (appointmentData) => ({
  type: CALENDAR.POST_APPOINTMENT_SUCCESS,
  payload: appointmentData,
});
const postAppointmentFail = (error) => ({
  type: CALENDAR.POST_APPOINTMENT_FAIL,
  payload: error,
});

export {
  updateCalendar,
  loadAppointments,
  loadAppointmentsSuccess,
  loadAppointmentsFail,
  postAppointment,
  postAppointmentSuccess,
  postAppointmentFail,
};
