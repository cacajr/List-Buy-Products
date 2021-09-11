import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../context/ShoppingCart/shoppingCart';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Remove, Add } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
});

function CardProductBuy({ product }) {
  const shoppingCartContext = useContext(ShoppingCartContext);

  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginBottom: '15px' }}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt={product.title}
            height="200"
            width="100"
            image={product.picture}
            title={product.title}
            />
            <CardContent>
            <Typography gutterBottom variant="subtitle1">
                {product.title}
            </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions className={classes.actions}>
            <Typography gutterBottom variant="subtitle2" style={{ fontWeight: "bold" }}>
                {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </Typography>

            <IconButton style={{ height: "5px", width: "5px" }}
              onClick={() => shoppingCartContext.removeProduct(product)}
            >
              <Remove color="secondary" fontSize="small" />
            </IconButton>
            <Typography gutterBottom variant="subtitle2">
                {product.quantity}
            </Typography>
            <IconButton style={{ height: "5px", width: "5px" }}
              onClick={() => shoppingCartContext.saveProduct(product)}
            >
              <Add color="primary"/>
            </IconButton>
        </CardActions>
    </Card>
  );
}

export default CardProductBuy;