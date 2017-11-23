import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import HomeIcon from 'material-ui-icons/Home';
import FavoriteIcon from 'material-ui-icons/Favorite';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';

const styles = {
  root: {
    width: '100%',

  },
};


class Bottomnavigation extends Component {

  state = {
  value: 'recents',
};

handleChange = (event, value) => {
  this.setState({ value });
};

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationButton label="Home" value="recents" icon={<HomeIcon />} />
        <BottomNavigationButton label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
        {this.props.children}
      </div>
    );
  }
}

Bottomnavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bottomnavigation);
