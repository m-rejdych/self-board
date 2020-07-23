import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Header from './shared/Header';
import Footer from './shared/Footer';
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
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
