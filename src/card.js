import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(cardContent) {
  const classes = useStyles();
  cardContent=cardContent.cardContent
  //console.log(cardContent.cardContent); 
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {cardContent.word}
        </Typography>
        <Typography variant="body2" component="p">
          {cardContent.senses[0].definition}
        </Typography>
      </CardContent>
      <CardActions>
       <Link to={{
    pathname:`/${cardContent.id}`,
    state: {
      cardContent: cardContent,
    },
  }}
  >
  <Button size="small">Learn More</Button></Link>  
        
      </CardActions>
    </Card>
  );
}
//{cardContent.senses[0].definition}