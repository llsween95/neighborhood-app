import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password } = this.state

    return (
      <form
        onSubmit={() => { this.props.handleLoginSubmit() }}
      >
        <h3>Login</h3>
        <label for="email">Email:</label>
        <input
          name="email"
          value={email}
          type="text"
          onChange={this.handleChange}
        />
        <br />
        <label for="password">Password:</label>
        <input
          name="password"
          value={password}
          type="password"
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    )
  }
}
