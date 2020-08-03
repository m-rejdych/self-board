import axios from '../../axiosFirebase';
import { put, takeEvery } from 'redux-saga/effects';
import {
  postAppointmentSuccess,
  postAppointmentFail,
  loadAppointmentsSuccess,
  loadAppointmentsFail,
} from '../actions';
import { CALENDAR } from '../constans';

function* handleLoadAppointments({ payload: { userId, token } }) {
  try {
    const query = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    const response = yield axios.get(`/appointments.json${query}`);
    const keys = Object.keys(response.data);
    const appointments = keys.map((key) => ({
      ...response.data[key].appointment,
      id: key,
    }));
    yield put(loadAppointmentsSuccess(appointments));
  } catch (error) {
    yield put(loadAppointmentsFail(error.message));
  }
}

function* handlePostAppointment({
  payload: { appointment, token, userId, id },
}) {
  try {
    console.log(token, id, userId, appointment);
    yield axios.put(`/appointments/${id}.json?auth=${token}`, {
      appointment,
      userId,
    });
    yield put(postAppointmentSuccess({ appointment, id }));
  } catch (error) {
    yield put(postAppointmentFail(error.message));
  }
}

function* setPostAppointment(action) {
  yield takeEvery(CALENDAR.POST_APPOINTMENT, handlePostAppointment);
}

function* setLoadAppointments(action) {
  yield takeEvery(CALENDAR.LOAD_APPOINTMENTS, handleLoadAppointments);
}

export { setPostAppointment, setLoadAppointments };
