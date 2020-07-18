import React from 'react';
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

import { updateCalendar } from '../../store/actions';

const Calendar = () => {
  const appointments = useSelector((state) => state.calendar.appointments);
  const currentDate = useSelector((state) => state.calendar.currentDate);
  const dispatch = useDispatch();

  const commitChanges = ({ added, changed, deleted }) => {
    let newAppointments;

    if (added) {
      const newAppointmentId = appointments.length
        ? appointments[appointments.length - 1].id + 1
        : 0;
      newAppointments = [...appointments, { id: newAppointmentId, ...added }];
    }

    if (changed) {
      newAppointments = appointments.map((appointment) => {
        const changedApointment = changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment;
        return changedApointment;
      });
    }

    if (deleted !== undefined) {
      newAppointments = appointments.filter(
        (appointment) => appointment.id !== deleted,
      );
    }

    dispatch(updateCalendar(newAppointments));
  };

  return (
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
  );
};

export default Calendar;
