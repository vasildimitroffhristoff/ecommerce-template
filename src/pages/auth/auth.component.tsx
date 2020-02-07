import React from 'react'
import SignIn from '../../components/sign-in'
import SignUp from '../../components/sign-up'

import './auth.styles.scss'

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  )
}
export default Auth
