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
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  state = { currentUser: null }

  unsubscribeFromAuth: firebase.Unsubscribe | null = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      (user) => {
        this.setState({ currentUser: user })
      }
    )
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth()
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={Auth} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
