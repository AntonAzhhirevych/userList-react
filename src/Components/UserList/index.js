import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import shortid from 'shortid';
import UserItem from '../UserItem';

const UserList = ({
  list,
  name,
  lastname,
  age,
  sex,
  getFilteredUsers,
  classes,
}) => {
  const filteredUsers = getFilteredUsers(list, name, lastname, age, sex);
  return (
    <>
      {filteredUsers.length === 0 && (
        <Typography className={classes.text}>
          Пользователь по результату поиска не найден!!!
        </Typography>
      )}
      <List className={classes.list}>
        {filteredUsers.map(user => (
          <UserItem key={shortid()} item={user} />
        ))}
      </List>
    </>
  );
};

UserList.defaultProps = {
  name: '',
  lastname: '',
  age: '',
  sex: '',
};

UserList.propTypes = {
  list: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      sex: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  name: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.string,
  sex: PropTypes.string,
  getFilteredUsers: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    list: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: 800,
  },
  text: {
    margin: '60px auto 0 auto',
    fontSize: 36,
    color: '#424242',
  },
});

export default withStyles(styles)(UserList);
