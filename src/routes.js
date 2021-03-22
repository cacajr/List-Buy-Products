import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/main';
import Page01 from './pages/Page01/page01';
import Page02 from './pages/Page02/page02';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/page01' component={Page01} />
                <Route path='/page02' component={Page02} />
            </Switch>
        </BrowserRouter>
    );
}