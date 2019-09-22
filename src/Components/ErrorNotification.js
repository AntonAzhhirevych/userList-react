import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const ErrorNotification = ({ error }) => (
  <Grid container justify="center">
    <h1>Whoops, something went wrong: {error}</h1>
  </Grid>
);

ErrorNotification.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorNotification;
