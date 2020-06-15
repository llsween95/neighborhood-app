import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

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
    const { handleLoginSubmit, history } = this.props

    return (
      <div className="login">
        <form onSubmit={(e) => {
          e.preventDefault()
          handleLoginSubmit(this.state)
          history.push('/')
          this.setState({
            email: '',
            password: ''
          })
        }}
        >
          <h3>Login</h3>
          <div>
            <input
              placeholder="Email"
              name="email"
              value={email}
              type="text"
              onChange={this.handleChange}
            />
            <br />
            <input
              placeholder="Password"
              name="password"
              value={password}
              type="password"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button>Submit</button>
          <br />
          <Link to="/user/register">Register</Link>
        </form>
      </div>
    )
  }
}
