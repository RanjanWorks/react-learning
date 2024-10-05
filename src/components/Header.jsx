import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/react.svg'
function Header() {
  return (
    <header  className='w-full flex items-center justify-between p-3 px-10 h-12 bg-zinc-50'>
        <div>
        <img src={logo} alt="react logo" className='h-8' />
        </div>
        <div>
            <ul  className='flex gap-8 items-center'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
        </div>
    </header>
  )
}

export default Header