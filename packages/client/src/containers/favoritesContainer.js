import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';
import Brand from "../components/brand";
import List from 'material-ui/List'
import SearchIcon from 'material-ui-icons/Search';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {withRouter} from "react-router-dom";
import { GetLikedBrands, LikeBrand, SearchBrand } from "../actions/brandActions";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class AccountContainer extends Component {

  state={
    searchkey:''
  }
    
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      this.props.Searchbrand({search:this.state.searchkey});
    }
  }

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
        <FormControl fullWidth className={classes.formControl}>
          <Input
            id="searchkey"
            onChange={this.handleChange('searchkey')}
            onKeyPress={this.handleKeyPress}
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
    Getlikedbrands: data => {
      dispatch(GetLikedBrands());
    },
    Likebrand: data => {
      dispatch(LikeBrand(data));
    },
    Searchbrand:data=>{
      dispatch(SearchBrand(data));
    }
  };
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountContainer)));
