import React, { useState } from 'react';
import { Container, Paper, makeStyles } from '@material-ui/core';

import DashboardTabs from '../../components/Tabs';

const useClasses = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(10),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    height: '100%',
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
