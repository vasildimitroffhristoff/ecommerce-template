import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage'
import React from 'react'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
