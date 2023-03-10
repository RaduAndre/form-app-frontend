import React from 'react'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
      Login <NavLink to="/register">To register</NavLink>
    </div>
  )
}
