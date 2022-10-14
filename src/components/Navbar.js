import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link to='/' className={({isActive})=> (isActive ? 'link active': 'link')}>Home</Link>
        <Link to='/about' className={({isActive})=>{
            return {
                color: isActive ? 'red' : 'grey'
            }
        }}>About</Link>
        <Link to='/products' className={({isActive})=>{
            return {
                color: isActive ? 'red' : 'grey'
            }
        }}>Products</Link>
    </nav>
  )
}
