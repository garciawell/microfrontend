import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Progress from './components/Progress';



const MarketingApp = lazy(() => import('./components/MarketingApp'))
const AuthApp = lazy(() => import('./components/AuthApp'))
const DashboardApp = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'rt'
})


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard" component={DashboardApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>

        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App;