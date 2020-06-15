import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  return (
    <header>
      <h1>Community Forum</h1>
      <div className="section-right">
        <div className="user-container">
          {
            props.currentUser
              ?
              <>{props.currentUser.name} <button className="logoutBtn" onClick={props.handleLogout}>Logout</button></>
              :
              <Link to='/user/login'>Login/Register</Link>
          }
        </div>
        {/* {
          props.currentUser && (
            <nav>
              <NavLink to="">Notifications</NavLink>
              <NavLink to="">Messages</NavLink>
            </nav>
          )
        } */}
      </div>
    </header>
  )
}
