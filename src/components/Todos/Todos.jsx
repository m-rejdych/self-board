import React from 'react';
import { makeStyles, TextField, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
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
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="New Todo" type="text" />
      <IconButton>
        <AddBoxIcon color="secondary" className={classes.icon} />
      </IconButton>
    </form>
  );
};

export default Todos;
