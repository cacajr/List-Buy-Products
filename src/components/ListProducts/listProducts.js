import React, { useContext } from 'react';

import { ProductContext } from '../../context/Products/products';

import CardProduct from '../CardProduct/cardProduct';

function ListProducts() {
    const productContext = useContext(ProductContext);
    const products = productContext.getProducts();

    return (
        <>
            {!!products.length && (
                products.map(product => (
                    <li key={product.id} style={{'listStyleType': 'none'}}>
                        <CardProduct
                            product={product}
                        />
                    </li>
                ))
            )}
        </>
    );
}

export default ListProducts;