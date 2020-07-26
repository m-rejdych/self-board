import React from 'react';
import { Field } from 'formik';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(3),
  },
}));

const AuthFormInputs = ({ values, loginMode }) => {
  const classes = useStyles();

  const inputs = [
    !loginMode && {
      name: 'name',
      type: 'text',
      placeholder: 'Enter your Name',
      label: 'Name',
      validate: (value) => {
        let errorMessage;
        errorMessage =
          value.length >= 2 ? '' : 'Name should be at leas 2 characters long!';
        return errorMessage;
      },
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email address',
      label: 'Email',
      validate: (value) => {
        let errorMessage;
        errorMessage = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value,
        )
          ? ''
          : 'Enter a valid email address!';
        return errorMessage;
      },
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      label: 'Password',
      validate: (value) => {
        let errorMessage;
        errorMessage = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? ''
          : 'Password should be at least 8 characters long and contain number and letter';
        return errorMessage;
      },
    },
    !loginMode && {
      name: 'passwordConfirmation',
      type: 'password',
      placeholder: 'Confirm your password',
      label: 'Confirm your password',
      validate: (value) => {
        let errorMessage;
        errorMessage =
          value === values.password ? '' : 'Passwords must be the same!';
        return errorMessage;
      },
    },
  ];

  return inputs.map(({ name, validate, ...rest }) => (
    <Field validate={validate} name={name}>
      {({ field, meta }) => (
        <TextField
          {...rest}
          {...field}
          error={meta.error && meta.touched}
          helperText={meta.error && meta.touched && meta.error}
          className={classes.textField}
          variant="outlined"
        />
      )}
    </Field>
  ));
};

export default AuthFormInputs;
