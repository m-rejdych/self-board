import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import PreviewDivider from '../PreviewDivider';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const TodosPreview = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PreviewDivider title="Todos" />
    </div>
  );
};

export default TodosPreview;
