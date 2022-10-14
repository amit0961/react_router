import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink to='/' className={({isActive})=>isActive ? 'link active': 'link'} end>Home</NavLink>
        <NavLink to='/about' className={({isActive})=>isActive ? 'link active': 'link'} >About</NavLink>
        <NavLink to='/products' className={({isActive})=>isActive ? 'link active': 'link'} >Products</NavLink>
    </nav>
  )
}
