import React, { useState } from 'react';
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

const Calendar = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'New appointment',
      startDate: new Date().setHours(new Date().getHours()),
      endDate: new Date().setHours(new Date().getHours() + 1),
    },
  ]);
  const [currentDate] = useState(new Date().toString());

  const commitChanges = ({ added, changed, deleted }) => {
    let newData;

    if (added) {
      const newAppointmentId = data[data.length - 1].id + 1;
      newData = [...data, { id: newAppointmentId, ...added }];
    }

    if (changed) {
      console.log(changed);
      newData = data.map((appointment) => {
        const changedApointment = changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment;
        return changedApointment;
      });
    }

    if (deleted) {
      newData = data.filter((appointment) => appointment.id !== deleted);
    }

    setData(newData);
  };

  return (
    <Scheduler firstDayOfWeek={1} data={data}>
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
