import React, { Component } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'

export default class App extends Component {

  state = {
    currentUser: null
  }


  componentDidMount() {
    this.handleVerify()
  }


  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData)
    this.setState({ currentUser })
  }

  handleRegisterSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData)
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear()
    removeToken()
  }

  // allows user to remain logged in
  handleVerify = async () => {
    const currentUser = await verifyUser()
    this.setState({ currentUser })
  }



  render() {
    return (
      <>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          currentUser={this.state.currentUser}
          handleLoginSubmit={this.handleLoginSubmit}
          handleRegisterSubmit={this.handleRegisterSubmit}
        />
      </>
    )
  }
}

