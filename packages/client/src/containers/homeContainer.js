import React, { Component } from "react";
import { connect } from "react-redux";
import BottomNavigation from "../components/bottomnavigation";
import { GetBrands, LikeBrand } from "../actions/brandActions";
import Brand from "../components/brand";
import {withRouter} from "react-router-dom";


class HomeContainer extends Component {

  constructor(props) {
    super(props);
  }
  
  BrandList = () => {
    return this.props.brands.map((brand,i) =>{
      return <Brand key={i}  
      title={brand.title} 
      description={brand.description} 
      url={brand.url} 
      datetime={brand.datetime} 
      likecount={brand.likecount}
      history={this.props.history}/>;
    });
  }

  render() {
    return (
      <div>
        {this.BrandList()}
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    brands: state.brand.brands
  };
};

let mapDispatchToProps = dispatch => {
  return {
    Getbrands: data => {
      dispatch(GetBrands());
    },
    Likebrands: data => {
      dispatch(LikeBrand(data));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
