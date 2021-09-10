import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CardProduct({ picture, title, price }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginBottom: '15px' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = {picture}
          title= {title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography gutterBottom variant="h6" component="h2">
          {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",")}
        </Typography>
        <Button size="big" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardProduct;