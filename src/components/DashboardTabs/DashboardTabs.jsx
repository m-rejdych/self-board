import React, { useState } from 'react';
import { makeStyles, AppBar, Tabs, Tab, Box } from '@material-ui/core';

import Todos from '../Todos';
import NewsFeed from '../NewsFeed';
import Calendar from '../Calendar';

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const DashboardTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { id: 1, label: 'Todos', component: <Todos /> },
    { id: 2, label: 'NewsFeed', component: <NewsFeed /> },
    { id: 3, label: 'Calendar', component: <Calendar /> },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          {tabs.map(({ label, id }) => (
            <Tab key={`tab_${id}`} label={label} id={id} />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map(({ component, id }) => (
        <TabPanel key={`tab-panel_${id}`} value={value} index={id - 1}>
          {component}
        </TabPanel>
      ))}
    </div>
  );
};

export default DashboardTabs;
