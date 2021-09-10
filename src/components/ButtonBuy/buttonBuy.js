import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../context/ShoppingCart/shoppingCart';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    button: {
      color: "white",
      background: "green",
      '&:hover': {
        backgroundColor: '#229a00',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
    }
  });

function ButtonBuy({ product }) {
    const shoppingCartContext = useContext(ShoppingCartContext);

    const classes = useStyles();

    return (
        <Button size="large" color="primary" className={classes.button}
          onClick={() => shoppingCartContext.saveProduct(product)}>
            Comprar
        </Button>
    );
}

export default ButtonBuy;