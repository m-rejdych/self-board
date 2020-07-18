import React, { useState } from 'react';
import { Container, Grid, Paper, makeStyles } from '@material-ui/core';

import Todos from '../../components/Todos';
import NewsFeed from '../../components/NewsFeed';
import Calendar from '../../components/Calendar';

const useClasses = makeStyles((theme) => ({
  root: {
    position: 'relative',
    top: 80,
    height: 'calc(100% - 146px)',
  },
  gridContainer: {
    height: '100%',
  },
  gridItem: {
    height: '100%',
    transition: 'all 0.3s ease-out',
  },
  gridItemHalfHeight: {
    height: '50%',
  },
  paper: {
    height: '100%',
    overflow: 'auto',
  },
}));

const Dashboard = () => {
  const classes = useClasses();

  const [todosHovered, setTodosHovered] = useState(false);
  const [newsFeedHovered, setNewsFeedHovered] = useState(true);
  const [calendarHovered, setCalendarHovered] = useState(false);

  const handleHover = (func, prop) => {
    func(prop);
    setNewsFeedHovered(!prop);
  };

  return (
    <Container disableGutters className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={3}
        className={classes.gridContainer}
      >
        <Grid
          className={classes.gridItem}
          onMouseEnter={() => handleHover(setTodosHovered, true)}
          onMouseLeave={() => handleHover(setTodosHovered, false)}
          item
          xs={todosHovered ? 8 : 2}
        >
          <Paper className={classes.paper} elevation={4}>
            <Todos />
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={newsFeedHovered ? 8 : 2}>
          <Paper className={classes.paper} elevation={4}>
            <NewsFeed newsFeedHovered={newsFeedHovered} />
          </Paper>
        </Grid>
        <Grid
          className={classes.gridItem}
          onMouseEnter={() => handleHover(setCalendarHovered, true)}
          onMouseLeave={() => handleHover(setCalendarHovered, false)}
          item
          xs={calendarHovered ? 8 : 2}
        >
          <Paper className={classes.paper} elevation={4}>
            <Calendar />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
