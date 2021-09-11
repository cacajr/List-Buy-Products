import React, { createContext, useState, useEffect } from "react";

import api from '../../services/api';

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);

    const loadProducts = async () => {
        const response = await api.get('/products')

        setProducts(response.data);
    }

    useEffect(() => {
        loadProducts()
    }, []);

    const getProducts = () => {
        return products
    }

    const incrementProduct = product => {
        let newProduct = products.filter(prod => prod.id === product.id)[0];
        const indexNewProduct = products.indexOf(newProduct);
        newProduct.quantity += 1;

        let newList = products.slice( 0, indexNewProduct)
                                .concat([newProduct])
                                .concat(products.slice(indexNewProduct + 1));

        setProducts(newList);
    }

    const decrementProduct = product => {
        let newProduct = products.filter(prod => prod.id === product.id)[0];
        const indexNewProduct = products.indexOf(newProduct);
        newProduct.quantity -= 1;

        let newList = products.slice( 0, indexNewProduct)
                                .concat([newProduct])
                                .concat(products.slice(indexNewProduct + 1));

        setProducts(newList);
    }

    const hasProduct = product => {
        let item = products.filter(prod => prod.id === product.id)[0];
        if (item.quantity > 0) {
            return true
        }
        return false
    }

    // TO DO!!! SERVIRÁ PARA O SEARCH DO COMPONENTE HEADER
    const searchProduct = () => {
    }

    return (
        <ProductContext.Provider value={{ getProducts, incrementProduct, decrementProduct, hasProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductsProvider;