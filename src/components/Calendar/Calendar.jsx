import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  EditingState,
  IntegratedEditing,
  ViewState,
} from '@devexpress/dx-react-scheduler';
import {
  WeekView,
  DayView,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  Scheduler,
  ConfirmationDialog,
  Toolbar,
  ViewSwitcher,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import { CircularProgress, Box } from '@material-ui/core';

import {
  updateCalendar,
  postAppointment,
  loadAppointments,
  updateAppointment,
  deleteAppointment,
} from '../../store/actions';
import Snackbar from '../UI/Snackbar';

const Calendar = () => {
  const appointments = useSelector((state) => state.calendar.appointments);
  const currentDate = useSelector((state) => state.calendar.currentDate);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.calendar.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAppointments({ userId, token }));
  }, [dispatch, token, userId]);

  const commitChanges = ({ added, changed, deleted }) => {
    let newAppointments;

    if (added) {
      const newAppointmentId = `id-${Math.floor(Math.random() * 1000000)}`;
      newAppointments = [...appointments, { id: newAppointmentId, ...added }];

      userId &&
        dispatch(
          postAppointment({
            token,
            userId,
            id: newAppointmentId,
            appointment: added,
          }),
        );
    }

    if (changed) {
      newAppointments = appointments.map((appointment) => {
        const changedApointment = changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment;
        userId &&
          changed[changedApointment.id] &&
          dispatch(
            updateAppointment({ appointment: changedApointment, token }),
          );
        return changedApointment;
      });
    }

    if (deleted !== undefined) {
      userId && dispatch(deleteAppointment({ id: deleted, token }));
      newAppointments = appointments.filter(
        (appointment) => appointment.id !== deleted,
      );
    }

    userId || dispatch(updateCalendar(newAppointments));
  };

  return loading ? (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size={100} />
    </Box>
  ) : (
    <Fragment>
      <Snackbar
        severity="info"
        message="Double click on a field to add an appointment"
      />
      <Scheduler firstDayOfWeek={1} data={appointments}>
        <ViewState
          defaultCurrentViewName="Week"
          defaultCurrentDate={currentDate}
        />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <WeekView cellDuration={60} startDayHour={8} endDayHour={20} />
        <DayView cellDuration={60} startDayHour={8} endDayHour={20} />
        <MonthView />
        <AllDayPanel />
        <Appointments />
        <AppointmentTooltip showDeleteButton showCloseButton showOpenButton />
        <AppointmentForm />
        <ConfirmationDialog />
        <Toolbar />
        <ViewSwitcher />
      </Scheduler>
    </Fragment>
  );
};

export default Calendar;
