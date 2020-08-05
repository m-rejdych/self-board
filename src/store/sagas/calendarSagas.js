import axios from '../../axiosFirebase';
import { put, takeEvery } from 'redux-saga/effects';
import {
  postAppointmentSuccess,
  postAppointmentFail,
  loadAppointmentsSuccess,
  loadAppointmentsFail,
  updateAppointmentSuccess,
  updateAppointmentFail,
  deleteAppointmentSuccess,
  deleteAppointmentFail,
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

function* handleUpdateAppointment({ payload: { appointment, token } }) {
  try {
    yield axios.patch(`/appointments/${appointment.id}.json?auth=${token}`, {
      appointment,
    });
    yield put(updateAppointmentSuccess(appointment));
  } catch (error) {
    yield put(updateAppointmentFail(error.message));
  }
}

function* handleDeleteAppointment({ payload: { id, token } }) {
  try {
    yield axios.delete(`/appointments/${id}.json?auth=${token}`);
    yield put(deleteAppointmentSuccess(id));
  } catch (error) {
    yield put(deleteAppointmentFail(error.message));
  }
}

function* setPostAppointment(action) {
  yield takeEvery(CALENDAR.POST_APPOINTMENT, handlePostAppointment);
}

function* setLoadAppointments(action) {
  yield takeEvery(CALENDAR.LOAD_APPOINTMENTS, handleLoadAppointments);
}

function* setUpdateAppointments(action) {
  yield takeEvery(CALENDAR.UPDATE_APPOINTMENT, handleUpdateAppointment);
}

function* setDeleteAppointment(action) {
  yield takeEvery(CALENDAR.DELETE_APPOINTMENT, handleDeleteAppointment);
}
export {
  setPostAppointment,
  setLoadAppointments,
  setUpdateAppointments,
  setDeleteAppointment,
};
