import React from 'react';
import { makeStyles } from '@material-ui/core';

const useClasses = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}));

function App() {
  const classes = useClasses();

  return <div className={classes.root}></div>;
}

export default App;
