import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Product = lazy(() => import('./views/product'))
const Shopping  = lazy(() => import('./views/shopping'))
const Notfound = lazy(() => import('./views/notfound'))

const Routes = () => (
    <Router>
        <Suspense fallback={<div>Progresso</div>}>
            <Switch>
                <Route exact path="/" component={Product} />  
                <Route exact path="/shopping" component={Shopping} />                              
                <Route path="*" component={Notfound} />                              
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;
