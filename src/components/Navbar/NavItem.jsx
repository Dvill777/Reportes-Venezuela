import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ to, children }) => {
  return (
    <Link className='w-full p-3 text-center font-medium hover:underline hover:text-sky-300' to={to}>{children}</Link>
  )
}

export default NavItem