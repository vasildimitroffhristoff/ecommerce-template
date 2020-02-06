import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import HomePage from './pages/homepage'
import React from 'react'
import ShopPage from './pages/shop'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
