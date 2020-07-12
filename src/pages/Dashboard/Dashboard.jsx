import React from 'react';
import { Container, Grid, Paper, makeStyles } from '@material-ui/core';

const useClasses = makeStyles((theme) => ({
  root: {
    position: 'relative',
    top: theme.spacing(10),
  },
}));

const Dashboard = () => {
  const classes = useClasses();

  return (
    <Container disableGutters className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container></Grid>
      </Paper>
    </Container>
  );
};

export default Dashboard;
