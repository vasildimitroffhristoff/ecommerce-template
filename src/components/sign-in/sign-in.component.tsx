import React from 'react'
import FormInput from '../form-input'
import CustomButton from '../custom-button'
import './sign-in.styles.scss'

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
        <form onSubmit={this.handleSubmit} action="">
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
          <CustomButton type="submit">
            Submit form
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
