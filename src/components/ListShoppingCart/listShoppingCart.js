import React, { useContext } from 'react';

import { ProductContext } from '../../context/Products/products';
import { ShoppingCartContext } from '../../context/ShoppingCart/shoppingCart';

import CardProductBuy from '../CardProductBuy/cardProductBuy';

function ListShoppingCart() {
    const productContext = useContext(ProductContext);

    const shoppingCartContext = useContext(ShoppingCartContext);
    const products = shoppingCartContext.products;

    return (
        <>
            {!!products.length && (
                products.map(product => (
                    <li key={product.id} style={{'listStyleType': 'none'}}>
                        <CardProductBuy
                            product={product}
                            hasProduct={productContext.hasProduct}
                        />
                    </li>
                ))
            )}
        </>
    );
}

export default ListShoppingCart;