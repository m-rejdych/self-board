import React, { Fragment } from 'react';
import { makeStyles, TextField, IconButton, Divider } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import Todo from './Todo';

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 40,
  },
}));

const Todos = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField label="New Todo" type="text" />
        <IconButton>
          <AddBoxIcon color="primary" className={classes.icon} />
        </IconButton>
      </form>
      <Divider />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </Fragment>
  );
};

export default Todos;
