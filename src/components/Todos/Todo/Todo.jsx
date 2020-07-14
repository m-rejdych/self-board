import React, { Fragment } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import { red, green } from '@material-ui/core/colors';
import { Card, CardHeader, IconButton, makeStyles } from '@material-ui/core';

const useClasses = makeStyles((theme) => ({
  root: {
    '&:not(:last-child)': {
      marginBottom: 5,
    },
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
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

const Todo = ({ label }) => {
  const classes = useClasses();

  return (
    <Card classes={{ root: classes.root }}>
      <CardHeader
        classes={{ action: classes.actionButtons }}
        className={classes.cardHeader}
        titleTypographyProps={{ className: classes.title }}
        title={label}
        action={
          <Fragment>
            <IconButton>
              <DoneIcon className={classes.doneIcon} />
            </IconButton>
            <IconButton>
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </Fragment>
        }
      />
    </Card>
  );
};

export default Todo;
