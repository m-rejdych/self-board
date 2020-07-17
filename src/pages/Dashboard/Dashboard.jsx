import React from 'react';
import { Container, Grid, Paper, makeStyles } from '@material-ui/core';

import Todos from '../../components/Todos';
import NewsFeed from '../../components/NewsFeed';

const useClasses = makeStyles((theme) => ({
  root: {
    position: 'relative',
    top: 80,
    height: 'calc(100% - 146px)',
  },
  gridContainer: {
    height: '100%',
  },
  item: {
    height: '100%',
  },
  paper: {
    height: '100%',
    overflow: 'auto',
  },
}));

const Dashboard = () => {
  const classes = useClasses();

  return (
    <Container disableGutters className={classes.root}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid className={classes.item} item xs={3}>
          <Paper className={classes.paper} elevation={4}>
            <Todos />
          </Paper>
        </Grid>
        <Grid className={classes.item} item xs={6}>
          <Paper className={classes.paper} elevation={4}>
            <NewsFeed />
          </Paper>
        </Grid>
        <Grid className={classes.item} item xs={3}>
          <Paper className={classes.paper} elevation={4}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
