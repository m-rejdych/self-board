import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  makeStyles,
  TextField,
  Divider,
  CircularProgress,
  Box,
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import Todo from './Todo';
import { updateTodos, postTodo, loadTodos } from '../../store/actions';

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
    cursor: 'pointer',
  },
}));

const Todos = () => {
  const classes = useStyles();
  const todos = useSelector((state) => state.todos.todos);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    userId && dispatch(loadTodos({ userId, token }));
  }, [userId, token, dispatch]);

  const handleClick = () => {
    if (inputValue) {
      const todo = {
        todo: inputValue,
        id: `id-${Math.floor(Math.random() * 1000000)}`,
        checked: false,
      };
      userId
        ? dispatch(postTodo({ todo, userId, token }))
        : dispatch(updateTodos([...todos, todo]));
      setInputValue('');
    }
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <TextField
          fullWidth
          value={inputValue}
          label="New Todo"
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' && handleClick()}
        />
        <AddBoxIcon
          onClick={handleClick}
          color="primary"
          className={classes.icon}
        />
      </div>
      <Divider />
      {todos.map(({ todo, id, checked }) => {
        return <Todo key={id} id={id} label={todo} checked={checked} />;
      })}
      {loading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress size={100} />
        </Box>
      )}
    </Fragment>
  );
};

export default Todos;
