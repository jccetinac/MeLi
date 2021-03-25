import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { AddSearch } from '../components/AddSearch';
import { ProductScreen } from '../components/product/ProductScreen';
import { ResultScreen } from '../components/search/ResultScreen';
const CONST = require('../utilities/constants');


export const AppRouter = () => {
    // eslint-disable-next-line 
    const [ query, setQuery] = useState();
    const ROUTE_PRODUCT = `${ CONST.LIST.ROUTE_APP }${ CONST.LIST.ROUTE_PATH_PRODUCT}`;
    const ROUTE_SEARCH = CONST.LIST.ROUTE_APP;
    return (       
        
        <Router>  
                <AddSearch setQuery={ setQuery } />   
                <div className="container mt-2">
                    <Switch>
                        <Route exact path={ ROUTE_PRODUCT } component={ ProductScreen } />
                        <Route exact path={ ROUTE_SEARCH } component={ ResultScreen } />
                        <Redirect to ="/" />
                        
                    </Switch>
                </div>
        </Router>
    )
}
