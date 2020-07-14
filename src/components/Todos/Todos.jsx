import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, TextField, IconButton, Divider } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import Todo from './Todo';
import { addTodo } from '../../store/actions';

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
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    inputValue && dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <Fragment>
      <div className={classes.form}>
        <TextField
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          label="New Todo"
          type="text"
        />
        <IconButton onClick={submitHandler} type="submit">
          <AddBoxIcon color="primary" className={classes.icon} />
        </IconButton>
      </div>
      <Divider />
      {todos.map((todo, index) => (
        <Todo key={index} label={todo} />
      ))}
    </Fragment>
  );
};

export default Todos;
