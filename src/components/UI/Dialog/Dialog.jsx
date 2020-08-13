import React from 'react';
import {
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const TransitionComponent = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const DialogComponent = ({ handleClose, open, title, actions, content }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      TransitionComponent={TransitionComponent}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent className={classes.content}>{content}</DialogContent>
      <DialogActions disableSpacing className={classes.actions}>
        {actions}
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
