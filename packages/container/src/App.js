import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Progress from './components/Progress';
import { createBrowserHistory } from 'history'


const MarketingApp = lazy(() => import('./components/MarketingApp'))
const AuthApp = lazy(() => import('./components/AuthApp'))
const DashboardApp = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'rt'
})

const history = createBrowserHistory();


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if(isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth">
                  <AuthApp onSignIn={() => setIsSignedIn(true)} />
                </Route>
                <Route path="/dashboard">
                  {!isSignedIn && <Redirect to="/" />}
                  <DashboardApp />
                </Route>
                <Route path="/" component={MarketingApp} />
              </Switch>
            </Suspense>

          </div>
      </StylesProvider>
    </Router>
  )
}

export default App;