import React, { Fragment, useState } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-scroll';

import { ReactComponent as LandingPageSvg } from '../../assets/LandingPageSvg.svg';
import Modal from '../UI/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
  typography: {
    zIndex: 2,
  },
  buttonsContainer: {
    position: 'relative',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: theme.spacing(40),
    top: theme.spacing(5),
  },
  background: {
    width: '55%',
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
      animation: '$infiniteSwing 2s 4s ease-out forwards infinite',
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
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  return (
    <Fragment>
      <Modal open={openModal} handleClose={handleCloseModal} />
      <ParallaxBanner
        style={{ height: '100vh' }}
        layers={[
          {
            children: (
              <div className={classes.root}>
                <LandingPageSvg className={classes.background} />
                <div className={classes.textContainer}>
                  <div className={classes.square} />
                  <Typography className={classes.typography} variant="h1">
                    Self Board
                  </Typography>
                  <Typography className={classes.typography} variant="h4">
                    Your daily guide
                  </Typography>
                  <div className={classes.buttonsContainer}>
                    <Link smooth duration={500} to="info">
                      <Button size="large" color="secondary">
                        SHOW MORE
                      </Button>
                    </Link>
                    <Button
                      size="large"
                      variant="outlined"
                      color="primary"
                      onClick={handleOpenModal}
                    >
                      GET STARTED
                    </Button>
                  </div>
                </div>
              </div>
            ),
            amount: 0.5,
          },
        ]}
      />
    </Fragment>
  );
};

export default LandingPage;
