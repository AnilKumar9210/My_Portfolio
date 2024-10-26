import React from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
            <Link to='AboutMe'>About me</Link>
        </li>
        <li>
            <Link to='Projects'>Projects</Link>
        </li>
        <li>
            <Link to='Services'>Services</Link>
        </li>
        <li>
            <Link to='ContactMe'>Contact me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
