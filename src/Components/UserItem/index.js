import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const UserItem = ({ item, classes }) => (
  <ListItem className={classes.item}>
    <Card className={classes.card}>
      <Typography
        className={classes.name}
      >{`${item.name} ${item.lastname}`}</Typography>
      <Typography>Возраст: {item.age}</Typography>
      <Typography>Пол: {item.sex === 'm' ? 'М' : 'Ж'}</Typography>
    </Card>
  </ListItem>
);

UserItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    item: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = () => ({
  item: {
    width: 370,
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
    color: '#424242',
  },
  card: {
    width: '100%',
    padding: 10,
  },
});

export default withStyles(styles)(UserItem);
