import React from 'react';
import { Container, Grid, Paper, makeStyles, Divider } from '@material-ui/core';

import Todos from '../../components/Todos';

const useClasses = makeStyles((theme) => ({
  root: {
    position: 'relative',
    top: theme.spacing(10),
  },
  paper: {
    padding: 30,
  },
  item: {
    height: 500,
  },
  paperInside: {
    height: '90%',
  },
}));

const Dashboard = () => {
  const classes = useClasses();

  return (
    <Container disableGutters className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid className={classes.item} item xs={3}>
            <Paper className={classes.paperInside} elevation={3}>
              <Todos />
              <Divider />
            </Paper>
          </Grid>
          <Grid className={classes.item} item xs={6}>
            <Paper className={classes.paperInside} elevation={3}></Paper>
          </Grid>
          <Grid className={classes.item} item xs={3}>
            <Paper className={classes.paperInside} elevation={3}></Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Dashboard;
