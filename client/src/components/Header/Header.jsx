import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Community Forum</h1>
      <Link to='/user/login'>Login/Register</Link>
    </header>
  )
}
