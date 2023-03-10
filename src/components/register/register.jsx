import React from 'react'
import { NavLink } from 'react-router-dom'

export const Register = () => {
  return (
    <div>
      Register <NavLink to="/login">To login</NavLink>
      <NavLink to="/home">To home</NavLink>
    </div>
  )
}
