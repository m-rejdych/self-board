import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import { red, green } from '@material-ui/core/colors';
import { Card, CardHeader, IconButton, makeStyles } from '@material-ui/core';

import {
  updateTodos,
  deleteTodo,
  checkTodo,
  patchCheckTodo,
} from '../../../store/actions';

const useClasses = makeStyles((theme) => ({
  '@keyframes inputEnter': {
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
  },
  root: {
    '&:not(:last-child)': {
      marginBottom: 5,
    },
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    transition: 'all 0.3s ease-out',
    animation: '$inputEnter 0.3s ease-out',
  },
  animateBorder: {
    border: `1px solid ${theme.palette.success.main}`,
  },
  animateDelete: {
    transform: 'translateX(-100%)',
    opacity: 0,
    pointerEvents: 'none',
  },
  title: {
    fontSize: theme.typography.body1.fontSize,
  },
  actionButtons: {
    alignSelf: 'center',
  },
  doneIcon: {
    color: green[500],
  },
  deleteIcon: {
    color: red[500],
  },
}));

const Todo = ({ label, id, checked }) => {
  const classes = useClasses();
  const todos = useSelector((state) => state.todos.todos);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    setDeleted(true);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTimeout(() => {
      userId
        ? dispatch(deleteTodo({ id, token }))
        : dispatch(updateTodos(updatedTodos));
    }, 300);
  };

  const handleCheck = () => {
    const updatedTodos = todos.map((todo) =>
      id === todo.id ? { ...todo, checked: !todo.checked } : todo,
    );
    const todo = todos.find((todo) => todo.id === id);
    userId
      ? dispatch(patchCheckTodo({ checked: !todo.checked, id, token }))
      : dispatch(checkTodo(updatedTodos));
  };

  const cardHeaderProps = {
    classes: { action: classes.actionButtons },
    className: classes.cardHeader,
    titleTypographyProps: { className: classes.title },
    title: label,
    action: (
      <Fragment>
        <IconButton onClick={handleCheck}>
          <DoneIcon className={classes.doneIcon} />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon className={classes.deleteIcon} />
        </IconButton>
      </Fragment>
    ),
  };

  return (
    <Card
      classes={{
        root: classNames(
          classes.root,
          checked && classes.animateBorder,
          deleted && classes.animateDelete,
        ),
      }}
    >
      <CardHeader {...cardHeaderProps} />
    </Card>
  );
};

export default Todo;
