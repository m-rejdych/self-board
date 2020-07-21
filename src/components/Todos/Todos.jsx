import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, TextField, IconButton, Divider } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import Todo from './Todo';
import { updateTodos } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  const handleClick = () => {
    inputValue &&
      dispatch(
        updateTodos([...todos, { todo: inputValue, id: Math.random() }]),
      );
    setInputValue('');
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <TextField
          fullWidth
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          label="New Todo"
          type="text"
          onKeyPress={(event) => handleEnterPress(event)}
        />
        <AddBoxIcon
          onClick={handleClick}
          color="primary"
          className={classes.icon}
        />
      </div>
      <Divider />
      {todos.map(({ todo, id }) => (
        <Todo key={id} id={id} label={todo} />
      ))}
    </Fragment>
  );
};

export default Todos;
