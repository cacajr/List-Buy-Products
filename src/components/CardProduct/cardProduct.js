import React from 'react';

import { Link } from 'react-router-dom';

import ButtonBuy from '../../components/ButtonBuy/buttonBuy';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between"
  },
});

function CardProduct({ product }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginBottom: '15px' }}>
      <Link 
        to={{ 
          pathname: '/detalharproduto',
          state: {product}
        }} 
        style={{ color: 'black',  textDecoration: 'none'}}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={product.title}
            height="350"
            image={product.picture}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions className={classes.actions}>
        <Typography gutterBottom variant="h6" component="h2">
          {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </Typography>

        <ButtonBuy product={product}/>
      </CardActions>
    </Card>
  );
}

export default CardProduct;