import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

export default class Register extends Component {

  state = {
    name: '',
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
    const { name, email, password } = this.state
    const { handleRegisterSubmit, history } = this.props

    return (
      <div className="register">
        <form onSubmit={(e) => {
          e.preventDefault()
          handleRegisterSubmit(this.state)
          history.push('/')
          this.setState({
            name: '',
            email: '',
            password: ''
          })
        }}
        >
          <h3>Register</h3>
          <div>
            <input
              placeholder="Name"
              id="name"
              name="name"
              value={name}
              type="text"
              onChange={this.handleChange}
            />
            <br />
            <input
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              type="text"
              onChange={this.handleChange}
            />
            <br />
            <input
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              type="password"
              onChange={this.handleChange}
            />
          </div>

          <br />
          <button>Submit</button>
          <br />
          <Link to="/user/login">Login</Link>
        </form>
      </div>
    )
  }
}