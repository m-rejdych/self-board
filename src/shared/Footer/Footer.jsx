import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useClasses = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: 0,
    marginTop: 'auto',
    width: '100%',
    minHeight: 48,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    '&:hover > *': {
      color: theme.palette.primary.light,
      fill: theme.palette.primary.light,
    },
    '&:active': {
      textDecoration: 'none',
    },
  },
  icon: {
    fill: theme.palette.text.secondary,
    marginRight: theme.spacing(0.5),
  },
}));

const Footer = () => {
  const classes = useClasses();
  const userId = useSelector((state) => state.auth.userId);

  return (
    <div className={classes.root}>
      <Link className={classes.link} to="/">
        <HomeIcon fontSize="small" className={classes.icon} />
        <Typography variant="body2" color="textSecondary">
          Home
        </Typography>
      </Link>
      <Typography variant="body2" color="textSecondary">
        &copy; Self Dashboard
      </Typography>
      <Link className={classes.link} to={userId ? '/' : '/auth'}>
        <ExitToAppIcon fontSize="small" className={classes.icon} />
        <Typography variant="body2" color="textSecondary">
          {userId ? 'Log out' : 'Log in'}
        </Typography>
      </Link>
    </div>
  );
};

export default Footer;
