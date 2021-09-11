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

    // TO DO!!! SERVIRÁ PARA O SEARCH DO COMPONENTE HEADER
    const searchProduct = () => {
    }

    return (
        <ProductContext.Provider value={{ getProducts }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductsProvider;