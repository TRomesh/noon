import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';
import Brand from "../components/brand";
import List from 'material-ui/List';
import Button from 'material-ui/Button';
import SearchIcon from 'material-ui-icons/Search';
import {withRouter} from "react-router-dom";
import { GetLikedBrands, LikeBrand } from "../actions/brandActions";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class AccountContainer extends Component {

  componentDidMount(){
    this.props.Getlikedbrands();
  }

  BrandList = () => {
    return this.props.brands.map((brand,i) =>{
      return <Brand key={i}
      id={brand._id}  
      title={brand.title} 
      description={brand.description} 
      url={brand.url} 
      datetime={brand.datetime} 
      liked={brand.like}
      like={this.PutLikeBrand}
      history={this.props.history}/>;
    });
  }

  PutLikeBrand=(id)=>{
    console.log('favcon',id);
    this.props.Likebrand(id);
  }


  render() {
    const { classes } = this.props;
    return (
      <List dense={true}>
        {this.BrandList()}
        <div>
          <Button fab color="primary" aria-label="search" className={classes.button}>
            <SearchIcon />
          </Button>
        </div>
      </List>
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
    Getlikedbrands: data => {
      dispatch(GetLikedBrands());
    },
    Likebrand: data => {
      dispatch(LikeBrand(data));
    }
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AccountContainer));
