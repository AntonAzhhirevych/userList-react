import React from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { user } from '../constants';

const SearchBar = ({
  onChange,
  name = '',
  lastname = '',
  age = '',
  sex = '',
  classes,
}) => (
  <form className={classes.container}>
    <TextField
      onChange={onChange}
      name={user.name}
      type="text"
      label="Имя"
      value={name}
      margin="normal"
    />
    <TextField
      onChange={onChange}
      name={user.lastname}
      type="text"
      label="Фамилия"
      value={lastname}
      margin="normal"
    />
    <TextField
      onChange={onChange}
      name={user.age}
      type="text"
      label="Возраст"
      value={age}
      margin="normal"
    />
    <Grid container justify="space-around">
      <FormControlLabel
        control={
          <Checkbox
            checked={sex === user.sex.m}
            onChange={onChange}
            name="sex"
            value="m"
            color="primary"
          />
        }
        label="Мужской"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sex === user.sex.f}
            onChange={onChange}
            name="sex"
            value="f"
            color="secondary"
          />
        }
        label="Женский"
      />
    </Grid>
  </form>
);

SearchBar.defaultProps = {
  name: '',
  lastname: '',
  age: '',
  sex: '',
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.string,
  sex: PropTypes.string,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = () => ({
  container: {
    margin: '0 auto',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 600,
    boxShadow: ' 1px 1px 10px black',
  },
});

export default withStyles(styles)(SearchBar);
