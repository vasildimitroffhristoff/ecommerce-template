import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './header.styles.scss'
import React, { Fragment } from 'react'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="">
          CONTACT
        </Link>
        {currentUser ? (
          <React.Fragment>
            <div
              className="option"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          </React.Fragment>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
