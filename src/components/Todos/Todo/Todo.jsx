import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import { red, green } from '@material-ui/core/colors';
import { Card, CardHeader, IconButton, makeStyles } from '@material-ui/core';

import { updateTodos, deleteTodo } from '../../../store/actions';

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

const Todo = ({ label, id }) => {
  const classes = useClasses();
  const todos = useSelector((state) => state.todos.todos);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
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
      <CardHeader
        classes={{ action: classes.actionButtons }}
        className={classes.cardHeader}
        titleTypographyProps={{ className: classes.title }}
        title={label}
        action={
          <Fragment>
            <IconButton onClick={() => setChecked(!checked)}>
              <DoneIcon className={classes.doneIcon} />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </Fragment>
        }
      />
    </Card>
  );
};

export default Todo;
