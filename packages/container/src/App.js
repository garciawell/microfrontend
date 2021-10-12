import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
  productionPrefix: 'rt'
})


function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/auth"  component={AuthApp} />
            <Route path="/"  component={MarketingApp} />
          </Switch>

        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App;