import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  selfBoard: {
    fontFamily: 'Galada, Roboto, Helvetica, sans-serif',
  },
  selfBoardLink: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
  dashboardLink: {
    marginRight: theme.spacing(3),
  },
  aboutLink: {
    marginRight: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Link
            className={classes.selfBoardLink}
            color="textPrimary"
            underline="none"
            href="/"
          >
            <Typography variant="h3" className={classes.selfBoard}>
              Self Board
            </Typography>
          </Link>
          <Link
            className={classes.dashboardLink}
            color="textPrimary"
            underline="none"
            href="/dashboard"
          >
            <Typography variant="h4" className={classes.dashboard}>
              Dashboard
            </Typography>
          </Link>
          <Link
            className={classes.aboutLink}
            color="textPrimary"
            underline="none"
            href="/about"
          >
            <Typography variant="h4" className={classes.about}>
              About
            </Typography>
          </Link>
          <Link color="textPrimary" underline="none" href="/login">
            <Typography variant="h4">Log In</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
