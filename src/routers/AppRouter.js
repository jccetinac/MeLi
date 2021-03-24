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


export const AppRouter = () => {
    const [ query, setQuery] = useState();
    return (       
        
        <Router>  
                <AddSearch setQuery={ setQuery } />   
                <div className="container mt-2">
                    <Switch>
                        <Route exact path="/items/:productId" component={ ProductScreen } />
                        <Route exact path="/items" component={ ResultScreen } />
                        <Redirect to ="/" />
                        
                    </Switch>
                </div>
        </Router>
    )
}
