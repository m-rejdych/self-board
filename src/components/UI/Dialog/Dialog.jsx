import React from 'react';
import {
  makeStyles,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
} from '@material-ui/core';

const useStyles = makeStyles({
  actions: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const TransitionComponent = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const DialogComponent = ({ handleClose, open, title, actions }) => {
  const classes = useStyles();

  const dialogProps = {
    open,
    TransitionComponent,
    keepMounted: true,
    onClose: handleClose,
  };

  return (
    <Dialog {...dialogProps}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions disableSpacing className={classes.actions}>
        {actions}
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
