import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

const RecipeReviewCard =({title,datetime,description,history,url,likecount})=>
      <div>
        <Card >
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={styles.avatar} src={url}>
               
              </Avatar>
            }
            title={title}
            subheader={datetime}
            onClick={e=>{
              history.push({
                pathname:"/brand",
                state:{
                  title:title,
                  datetime:datetime,
                  description:description,
                  url:url,
                  likecount:likecount
                }
              });
            }}
          />
          <CardContent>
            <Typography component="p">
            {description}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <div className={styles.flexGrow} />
          </CardActions>
        </Card>
      </div>;

export default RecipeReviewCard;
