import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import HomePage from './pages/homepage'
import Checkout from './pages/checkout'
import React, { useEffect } from 'react'
import ShopPage from './pages/shop'
import Auth from './pages/auth'
import Header from './components/Header'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/user.selectors'

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

const App: React.FC<Props> = ({
  setCurrentUser,
  currentUser
}) => {
  useEffect(
    () => {
      let unsubscribeFromAuth: UnsubscribeType = null
      unsubscribeFromAuth = auth.onAuthStateChanged(
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

      return () => {
        if (unsubscribeFromAuth) {
          unsubscribeFromAuth()
        }
      }
    },
    [ setCurrentUser ]
  )

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
              currentUser ? <Redirect to="" /> : <Auth />}
          />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  App
)
