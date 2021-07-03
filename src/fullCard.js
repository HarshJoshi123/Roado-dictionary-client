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

export default function FullCard(cardContent) {
 // const classes = useStyles();
  cardContent=cardContent.cardContent
  console.log(cardContent);

  return (
    <div>
     <Card>
      <CardContent>
         <Typography variant="h5" component="h2">
          {cardContent.id}
        </Typography>
        {cardContent.senses.map((v,i)=>(
       <Typography variant="body2" component="p">
        {v.definition}
        <br/>
        <ul>
        {v.examples[0] ? (<li>{v.examples[0]}</li>):"" }
        </ul>
        </Typography>

        
          ))
        

      }
      </CardContent>
      
    </Card>

     
    </div>
  );
}
