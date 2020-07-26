import React, { useState } from 'react';
import {
  Container,
  makeStyles,
  Button,
  Typography,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Formik } from 'formik';

import AuthFormInputs from '../../components/AuthFormInputs';

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - ${theme.spacing(6)}px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    padding: `${theme.spacing(8)}px ${theme.spacing(5)}px`,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
  },
  switchSpan: {
    color: theme.palette.secondary.main,
    cursor: 'pointer',
  },
}));

const Auth = () => {
  const classes = useStyles();
  const [loginMode, setLoginMode] = useState(false);

  const initialValues = loginMode
    ? { email: '', password: '' }
    : {
        email: '',
        name: '',
        password: '',
        passwordConfirmation: '',
      };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values, isValid, dirty }) => (
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={loginMode ? 'LOG IN' : 'SIGN UP'}
              action={
                <IconButton href="/">
                  <ArrowBackIosIcon />
                </IconButton>
              }
            />
            <CardContent className={classes.cardContent}>
              <AuthFormInputs values={values} loginMode={loginMode} />
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                fullWidth
                disabled={!isValid || !dirty}
                color="primary"
                variant="contained"
              >
                {loginMode ? 'LOG IN' : 'SIGN UP'}
              </Button>
              <Box display="flex" mt={1}>
                <Typography variant="caption">
                  {loginMode
                    ? "Don't have an account? "
                    : 'Already have an account? '}
                  <span
                    onClick={() => setLoginMode(!loginMode)}
                    className={classes.switchSpan}
                  >
                    {loginMode ? 'SIGN UP' : 'LOG IN'}
                  </span>
                </Typography>
              </Box>
            </CardActions>
          </Card>
        )}
      </Formik>
    </Container>
  );
};

export default Auth;
