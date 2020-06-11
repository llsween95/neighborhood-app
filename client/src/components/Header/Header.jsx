import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <h1>Community Forum</h1>
      {
        props.currentUser
          ?
          <>{props.currentUser.name} <button onClick={props.handleLogout}>Logout</button></>
          :
          <Link to='/user/login'>Login/Register</Link>
      }
      <hr />
    </header>
  )
}
