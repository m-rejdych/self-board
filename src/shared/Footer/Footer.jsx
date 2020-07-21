import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useClasses = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    minHeight: 48,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
}));

const Footer = () => {
  const classes = useClasses();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.marginRight}
        variant="body2"
        color="textSecondary"
      >
        &copy;
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Self Dashboard
      </Typography>
    </div>
  );
};

export default Footer;
