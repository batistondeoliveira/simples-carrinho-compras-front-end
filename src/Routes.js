import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Showcase = lazy(() => import('./views/showcase'))
const Shopping  = lazy(() => import('./views/shopping'))
const Notfound = lazy(() => import('./views/notfound'))

const Routes = () => (
    <Router>
        <Suspense fallback={<div>Progresso</div>}>
            <Switch>
                <Route exact path="/" component={Showcase} />  
                <Route exact path="/shopping" component={Shopping} />                              
                <Route path="*" component={Notfound} />                              
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;
