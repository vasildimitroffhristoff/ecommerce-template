import React from 'react'
import FormInput from '../form-input'
import CustomButton from '../custom-button'
import './sign-in.styles.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event: any) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I have already have account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">
              Sign in
            </CustomButton>

            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
