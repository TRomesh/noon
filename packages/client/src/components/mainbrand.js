import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
      maxWidth:'100%',
    },
    media: {
      height: 500,
    },
  };
  
  
  const MainBrand =(props)=>{
    const { classes } = props;
    return(
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.location.state.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
          {props.location.state.title}
          </Typography>
          <Typography component="p">
          {props.location.state.description}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
    </Card>);
  };
    

MainBrand.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MainBrand);