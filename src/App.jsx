import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Header from './shared/Header';
import Footer from './shared/Footer';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Auth from './pages/Auth';

const useClasses = makeStyles({
  root: {
    minHeight: '100vh',
  },
});

const App = () => {
  const classes = useClasses();

  return (
    <div className={classes.root}>
      {/*<Header />*/}
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/auth" component={Auth} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
