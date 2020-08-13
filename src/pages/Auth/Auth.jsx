import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  CircularProgress,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

import AuthFormInputs from './AuthFormInputs';
import { setLoginMode, auth, authResetError } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - ${theme.spacing(6)}px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    padding: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
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

const Auth = ({ history }) => {
  const classes = useStyles();
  const loginMode = useSelector((state) => state.user.loginMode);
  const loading = useSelector((state) => state.auth.loading);
  const errorMessage = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const initialValues = loginMode
    ? { email: '', password: '' }
    : {
        email: '',
        name: '',
        password: '',
        passwordConfirmation: '',
      };

  const handleResetMode = (handleReset) => {
    dispatch(setLoginMode(!loginMode));
    dispatch(authResetError());
    handleReset();
  };

  const handleSubmit = ({ name, email, password }) => {
    dispatch(
      auth({
        userData: { email, password, returnSecureToken: true },
        name,
        loginMode,
        history,
      }),
    );
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      {loading ? (
        <CircularProgress size={100} />
      ) : (
        <Formik initialValues={initialValues}>
          {({ values, isValid, dirty, handleReset }) => (
            <Card
              elevation={3}
              className={classes.card}
              onKeyPress={(event) =>
                event.key === 'Enter' && handleSubmit(values)
              }
            >
              <CardHeader
                title={loginMode ? 'LOG IN' : 'SIGN UP'}
                action={
                  <IconButton component={Link} rel="noopener" to="/">
                    <ArrowBackIosIcon />
                  </IconButton>
                }
              />
              <CardContent className={classes.cardContent}>
                {errorMessage && (
                  <Typography color="error" paragraph>
                    {loginMode
                      ? 'Email or password is not valid!'
                      : 'This email address is already used!'}
                  </Typography>
                )}
                <AuthFormInputs values={values} />
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  fullWidth
                  disabled={!isValid || !dirty}
                  color="primary"
                  variant="contained"
                  onClick={() => handleSubmit(values)}
                >
                  {loginMode ? 'LOG IN' : 'SIGN UP'}
                </Button>
                <Box display="flex" mt={1}>
                  <Typography variant="caption">
                    {loginMode
                      ? "Don't have an account? "
                      : 'Already have an account? '}
                    <span
                      onClick={() => handleResetMode(handleReset)}
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
      )}
    </Container>
  );
};

export default Auth;
