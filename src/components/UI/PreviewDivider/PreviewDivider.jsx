import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '15%',
    width: '100%',
    clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const PreviewDivider = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography color="primary" variant="h4">
        {title}
      </Typography>
    </div>
  );
};

export default PreviewDivider;
