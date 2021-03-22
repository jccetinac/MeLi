import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';


export const AppRouter = () => {
    return (
        <Router>            
                <div className="container mt-2">
                    <Switch>
                        <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                        <Route exact path="/dc" component={ DcScreen} />
                        <Route exact path="/search" component={ SearchScreen } />
                        <Redirect to="/search" />
                    </Switch>
                </div>
        </Router>
    )
}
