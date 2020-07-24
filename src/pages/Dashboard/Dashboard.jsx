import React, { useState } from 'react';
import { Container, Paper, makeStyles } from '@material-ui/core';

import DashboardTabs from '../../components/Tabs';

const useClasses = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    height: `calc(100vh - ${theme.spacing(6)}px)`,
    maxWidth: '100%',
  },
  paper: {
    height: '100%',
    overflow: 'auto',
  },
}));

const Dashboard = () => {
  const classes = useClasses();

  return (
    <Container classes={{ root: classes.root }} disableGutters>
      <Paper className={classes.paper}>
        <DashboardTabs />
      </Paper>
    </Container>
  );
};

export default Dashboard;
