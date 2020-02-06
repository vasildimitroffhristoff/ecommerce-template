import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import HomePage from './pages/homepage'
import React from 'react'
import ShopPage from './pages/shop'
import Auth from './pages/auth'
import Header from './components/header'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
