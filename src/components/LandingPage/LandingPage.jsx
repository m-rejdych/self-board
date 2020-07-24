import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Typography, makeStyles } from '@material-ui/core';

import LandingBackground from '../../assets/LandingBackground.jpg';

const useStyles = makeStyles({
  root: {
    height: '100%',
    backgroundImage: `url(${LandingBackground})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LandingPage = () => {
  const classes = useStyles();

  return (
    <ParallaxBanner
      style={{ height: '100vh' }}
      layers={[
        {
          children: (
            <div className={classes.root}>
              <Typography variant="h1">Self Board</Typography>
              <Typography variant="h4">Your daily guide</Typography>
            </div>
          ),
          amount: 0.5,
        },
      ]}
    />
  );
};

export default LandingPage;
