import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import { connect } from "react-redux";
import HomeIcon from 'material-ui-icons/Home';
import FavoriteIcon from 'material-ui-icons/Favorite';
import { GetPosts, LikePost } from "../actions/postActions";

const styles = {
  root: {
    width: 500,
  },
};


class HomeContainer extends Component {

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
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationButton label="Home" value="recents" icon={<HomeIcon />} />
        <BottomNavigationButton label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    );
  }
}

HomeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

let mapStateToProps = (state, props) => {
  return {
    posts: state.post.posts
  };
};

let mapDispatchToProps = dispatch => {
  return {
    Getposts: data => {
      dispatch(GetPosts());
    },
    Likeposts: data => {
      dispatch(LikePost(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomeContainer));
