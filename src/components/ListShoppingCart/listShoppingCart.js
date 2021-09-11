import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../context/ShoppingCart/shoppingCart';

import CardProductBuy from '../CardProductBuy/cardProductBuy';

function ListShoppingCart() {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const products = shoppingCartContext.products;

    return (
        <>
            {!!products.length && (
                products.map(product => (
                    <li key={product.id} style={{'listStyleType': 'none'}}>
                        <CardProductBuy
                            product={product}
                        />
                    </li>
                ))
            )}
        </>
    );
}

export default ListShoppingCart;