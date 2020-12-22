import React from 'react'
import { HashRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './modules/home/home'
import Description from './modules/description/description'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/description" component={Description} />
    </BrowserRouter>
);

export default Routes;