import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={name}
          type="text"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={email}
          type="text"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          value={password}
          type="password"
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
        <br />
      </form>
    )
  }
}