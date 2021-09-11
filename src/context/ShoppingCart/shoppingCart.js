import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);

    const saveProduct = product => {
        const newQuantity = products.filter(prod => prod.id === product.id).length

        if (newQuantity === 0){
            let newProduct = product;
            newProduct.quantity = 1;
        
            setProducts(products.concat(newProduct));
        } else {
            let newProduct = products.filter(prod => prod.id == product.id)[0]
            newProduct.quantity += 1;

            let newList = products.filter(prod => prod.id != product.id).concat(newProduct);

            setProducts(newList);
        }
    }

    const removeProduct = product => {
        if (product.quantity === 1){
            setProducts(products.filter(prod => prod.id != product.id));
        } else {
            let newProduct = products.filter(prod => prod.id == product.id)[0]
            newProduct.quantity -= 1;

            let newList = products.filter(prod => prod.id != product.id).concat(newProduct);

            setProducts(newList);
        }
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