import React from 'react'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import {
  auth,
  createUserProfileDocument
} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.state

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      const {
        user
      } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account.</h2>
        <span>Sign up with your email and password</span>
        <form
          className="sign-up-form"
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display name"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirmed Password"
          />

          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
