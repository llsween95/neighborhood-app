import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Route path="/user/login" render={() => (
          <Login
            handleLoginSubmit={this.props.handleLoginSubmit}
          />
        )} />
        <Route path="/user/register" render={() => (
          <Register
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        )} />
      </main>
    )
  }
}
