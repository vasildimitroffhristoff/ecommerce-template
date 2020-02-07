import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import HomePage from './pages/homepage'
import React from 'react'
import ShopPage from './pages/shop'
import Auth from './pages/auth'
import Header from './components/Header'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
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

type UserType =
  | {
      id: string
      cretedAt?: string
      displayName?: string
      email?: string
    }
  | firebase.User
  | null

interface Props {
  setCurrentUser: (currentUser: UserType) => void
  currentUser: UserType
}

class App extends React.Component<Props> {
  unsubscribeFromAuth: UnsubscribeType = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef: UserRefType = await createUserProfileDocument(
            userAuth
          )

          userRef!.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        }

        setCurrentUser(userAuth)
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
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="" />
                ) : (
                  <Auth />
                )}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(
  App
)
