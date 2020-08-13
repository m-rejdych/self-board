import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import {
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';
import { Link as ScrollLink } from 'react-scroll';

import { ReactComponent as LandingPageSvg } from '../../assets/LandingPageSvg.svg';
import { ReactComponent as DialogSvg } from '../../assets/DialogSvg.svg';
import Dialog from '../UI/Dialog';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  square: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: theme.spacing(-5),
    left: theme.spacing(-5.5),
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.down('sm')]: {
      width: 60,
      height: 60,
      top: theme.spacing(-2),
      left: theme.spacing(-3),
    },
    [theme.breakpoints.down('xs')]: {
      width: 100,
      height: 100,
      top: theme.spacing(-5),
      left: theme.spacing(-5.5),
    },
  },
  typography: {
    zIndex: 2,
  },
  modalButtonsMargin: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
  dialogSvg: {
    width: 300,
    height: 250,
    '& #cards1': {
      animation: '$infiniteSwing 2s ease-out infinite',
    },
    '& #cards2': {
      animation: '$infiniteSwing 2s 1s ease-out infinite',
    },
  },
  buttonsContainer: {
    position: 'relative',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: 320,
    top: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      width: 240,
    },
    [theme.breakpoints.down('xs')]: {
      width: 320,
    },
  },
  landingSvg: {
    width: 650,
    [theme.breakpoints.down('md')]: {
      width: 500,
    },
    [theme.breakpoints.down('sm')]: {
      width: 350,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '& #circle-big': {
      animation: '$enterCross 2s ease-out',
    },
    '& #circle-small': {
      animation: '$enterTop 2s ease-out',
    },
    '& #rectangles': {
      animation: '$enterTop 2s 2s ease-out backwards',
    },
    '& #leaf-2': {
      animation: '$enterBottom 2s 3s ease-out backwards',
    },
    '& #leaf-1': {
      animation: '$infiniteSwing 2s 4s ease-out infinite',
    },
    '& #square': {
      transformOrigin: 'center center',
      animation: '$rotate 1s 4s ease-out backwards',
    },
  },
  '@keyframes enterCross': {
    from: { transform: 'translate(-3%, -3%)' },
    to: { transform: 'translate(0)' },
  },
  '@keyframes enterTop': {
    from: { transform: 'translateY(-3%)' },
    to: { transform: 'translateY(0)' },
  },
  '@keyframes infiniteSwing': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-3%)' },
    '100%': { transform: 'translateY(0)' },
  },
  '@keyframes enterBottom': {
    from: { transform: 'translateY(2%)' },
    to: { transform: 'translateX(0)' },
  },
  '@keyframes rotate': {
    from: { transform: 'rotateY(90deg)' },
    to: { transform: 'rotateY(0)' },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const userId = useSelector((state) => state.auth.userId);
  const [openModal, setOpenModal] = useState(false);
  const md = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const parallaxLayers = [
    {
      children: (
        <div className={classes.root}>
          <LandingPageSvg className={classes.landingSvg} />
          <div className={classes.textContainer}>
            <div className={classes.square} />
            <Typography
              className={classes.typography}
              variant={xs ? 'h3' : sm ? 'h4' : md ? 'h3' : 'h1'}
            >
              Self Board
            </Typography>
            <Typography className={classes.typography} variant="h4">
              Your daily guide
            </Typography>
            <div className={classes.buttonsContainer}>
              <ScrollLink smooth duration={500} to="info">
                <Button
                  size={xs ? 'medium' : sm ? 'small' : 'large'}
                  color="secondary"
                >
                  SHOW MORE
                </Button>
              </ScrollLink>
              <Button
                size={xs ? 'medium' : sm ? 'small' : 'large'}
                variant="outlined"
                color="primary"
                onClick={() => userId || setOpenModal(true)}
                component={userId ? RouterLink : 'button'}
                to={userId && '/dashboard'}
              >
                GET STARTED
              </Button>
            </div>
          </div>
        </div>
      ),
      amount: 0.5,
    },
  ];

  return (
    <Fragment>
      <Dialog
        open={openModal}
        handleClose={() => setOpenModal(false)}
        title="Log in to get your own, unique dashboard!"
        content={<DialogSvg className={classes.dialogSvg} />}
        actions={
          <Fragment>
            <Button
              className={classes.modalButtonsMargin}
              fullWidth
              rel="noopener"
              component={RouterLink}
              variant="contained"
              to="/auth"
              color="primary"
            >
              Log In
            </Button>
            <Button
              className={classes.modalButtonsMargin}
              fullWidth
              rel="noopener"
              component={RouterLink}
              variant="contained"
              to="/dashboard"
              color="secondary"
            >
              Screw that, let's jump right into this!
            </Button>
          </Fragment>
        }
      />
      <ParallaxBanner style={{ height: '100vh' }} layers={parallaxLayers} />
    </Fragment>
  );
};

export default LandingPage;
