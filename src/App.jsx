import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';

const useClasses = makeStyles({
  root: {
    height: '100vh',
  },
});

function App() {
  const classes = useClasses();

  return (
    <div className={classes.root}>
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    </div>
  );
}

export default App;
