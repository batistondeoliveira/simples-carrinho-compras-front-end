import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Offline from './views/offline'

const Showcase = lazy(() => import('./views/showcase'))
const Checkout  = lazy(() => import('./views/checkout'))
const Notfound = lazy(() => import('./views/notfound'))

const Routes = () => (
    <>
        <Offline />

        <div id="online">  
            <Router>
                <Suspense fallback={<div>Progresso</div>}>
                    <Switch>
                        <Route exact path="/" component={Showcase} />  
                        <Route exact path="/checkout" component={Checkout} />                              
                        <Route path="*" component={Notfound} />                              
                    </Switch>
                </Suspense>
            </Router>
        </div>
    </>
)

export default Routes;
