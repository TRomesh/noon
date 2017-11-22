import React, { Component } from "react";
import { connect } from "react-redux";
import BottomNavigation from "../components/bottomnavigation";
import { GetPosts, LikePost } from "../actions/postActions";


class AccountContainer extends Component {

  render() {
    return (
      <BottomNavigation/>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
