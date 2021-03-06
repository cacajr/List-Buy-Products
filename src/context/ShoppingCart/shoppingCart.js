import React, { createContext, useContext, useState } from "react";

import { ProductContext } from '../Products/products';

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);

    const productContext = useContext(ProductContext);

    const saveProduct = product => {
        const newQuantity = products.filter(prod => prod.id === product.id).length

        if (newQuantity === 0){
            let newProduct = JSON.parse(JSON.stringify(product));
            newProduct.quantity = 1;
        
            setProducts(products.concat(newProduct));
        } else {
            let newProduct = products.filter(prod => prod.id === product.id)[0];
            const indexNewProduct = products.indexOf(newProduct);
            newProduct.quantity += 1;

            let newList = products.slice( 0, indexNewProduct)
                                  .concat([newProduct])
                                  .concat(products.slice(indexNewProduct + 1));

            setProducts(newList);
        }

        productContext.decrementProduct(product)
    }

    const removeProduct = product => {
        if (product.quantity === 1){
            setProducts(products.filter(prod => prod.id !== product.id));
        } else {
            let newProduct = products.filter(prod => prod.id === product.id)[0];
            newProduct.quantity -= 1;

            let newList = products.slice( 0, products.indexOf(product))
                                  .concat([newProduct])
                                  .concat(products.slice(products.indexOf(product) + 1));

            setProducts(newList);
        }

        productContext.incrementProduct(product)
    }

    const getTotalProduct = () => {
        let total = 0;
        products.map((product) => {
            total += product.quantity
        });

        return total
    }

    const getTotalPrice = () => {
        let total = 0;
        products.map((product) => {
            total += product.price * product.quantity
        });

        return total
    }

    return (
        <ShoppingCartContext.Provider value={{ products, saveProduct, removeProduct, getTotalProduct, getTotalPrice }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;