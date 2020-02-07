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
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils'

type UserRefType =
  | firebase.firestore.DocumentReference<
      firebase.firestore.DocumentData
    >
  | undefined

type UnsubscribeType = firebase.Unsubscribe | null

class App extends React.Component {
  state = { currentUser: null }

  unsubscribeFromAuth: UnsubscribeType = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef: UserRefType = await createUserProfileDocument(
            userAuth
          )

          userRef!.onSnapshot((snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })

            console.log(this.state)
          })
        }

        this.setState({ currentUser: userAuth })
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
