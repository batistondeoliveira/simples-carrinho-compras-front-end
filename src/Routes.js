import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Showcase = lazy(() => import('./views/showcase'))
const Checkout  = lazy(() => import('./views/checkout'))
const Notfound = lazy(() => import('./views/notfound'))

const Routes = () => (
    <Router>
        <Suspense fallback={<div>Progresso</div>}>
            <Switch>
                <Route exact path="/" component={Showcase} />  
                <Route exact path="/checkout" component={Checkout} />                              
                <Route path="*" component={Notfound} />                              
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;
