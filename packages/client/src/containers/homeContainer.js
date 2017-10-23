import React, { Component } from "react";
import { connect } from "react-redux";
import { GetPosts, LikePost } from "../actions/postActions";

class HomeContainer extends Component {
  render() {
    return <div>Home Container</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
