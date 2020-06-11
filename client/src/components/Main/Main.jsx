import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login/Login'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Route path="/user/login" render={() => (
          <Login
            handleLoginSubmit={this.props.handleLoginSubmit}
          />
        )} />

      </main>
    )
  }
}
