import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Products from './pages/Products/products';
import ProductDetail from './pages/ProductDetail/productDetail';
import ShoppingCart from './pages/ShoppingCart/shoppingCart';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Products} />
                <Route path='/detalharproduto' component={ProductDetail} />
                <Route path='/meucarrinho' component={ShoppingCart} />
            </Switch>
        </BrowserRouter>
    );
}