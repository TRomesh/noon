import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import FolderIcon from 'material-ui-icons/Star';
import StarIcon from 'material-ui-icons/Star';


const RecipeReviewCard =({id,title,datetime,description,history,url,liked,like})=>
        <ListItem button>
          <ListItemAvatar>
            <Avatar src={url}/>
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={description}
            onClick={e=>{
              history.push({
                pathname:"/brand",
                state:{
                  title:title,
                  datetime:datetime,
                  description:description,
                  url:url,
                  like:liked
                }
              });
            }}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Favorite">
              <StarIcon onClick={e=>{like({id:id});}}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>;

export default RecipeReviewCard;
