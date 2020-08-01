import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import PreviewDivider from '../../components/UI/PreviewDivider';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 500,
    marginRight: theme.spacing(5),
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  textColorSecondary: {
    color: theme.palette.secondary.main,
  },
}));

const PreviewGenerator = ({
  id,
  title,
  SvgIcon,
  headerText,
  subHeaderText,
}) => {
  const classes = useStyles();

  return (
    <div id={id} className={classes.root}>
      <PreviewDivider title={title} />
      <div className={classes.container}>
        <Parallax x={[-20, 0]}>
          <SvgIcon className={classes.icon} />
        </Parallax>
        <Parallax x={[20, 0]}>
          <div className={classes.textContainer}>
            <Typography variant="h3">
              TO{' '}
              <span className={classes.textColorSecondary}>{headerText}</span>
            </Typography>
            <Typography variant="h5">{subHeaderText}</Typography>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default PreviewGenerator;
