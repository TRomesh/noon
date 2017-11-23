import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import { GetBrands, LikeBrand, SearchBrand } from "../actions/brandActions";
import Brand from "../components/brand";
import Button from 'material-ui/Button';
import SearchIcon from 'material-ui-icons/Search';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {withRouter} from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  
});


class HomeContainer extends Component {

  state={

  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  componentDidMount(){
    this.props.Getbrands();
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
      like={this.props.Likebrand}
      history={this.props.history}/>;
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <List dense={true}>
        {this.BrandList()}
        <div>
        <FormControl fullWidth className={classes.formControl}>
          <Input
            id="amount"
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
          />
        </FormControl>
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
    Getbrands: () => {
      dispatch(GetBrands());
    },
    Likebrand: data => {
      dispatch(LikeBrand(data));
    },
    Searchbrand:data=>{
      dispatch(SearchBrand(data));
    }
  };
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer)));
