import React from 'react'

// images imports
import logo from '../assets/logo2.png';
import _3pplIcon from '../assets/3-people.png';
import logoutIcon from '../assets/logout.png';

export default function Nav() {
  return (
    <nav className="nav">
        <a href="#" className='logo'>
            <img src={logo} alt="site_logo" />
        </a>
        <input type="checkbox" id="toggleNav" />
        <label htmlFor="toggleNav" className='burgerBtn'>
            ☰
        </label>
        <div className="links_group">
            <a href="#">
                <img src={_3pplIcon} alt="connected_images" />
                <span>6 connected</span>
            </a>
            <a href="#">
                <img src={logoutIcon} alt="" />
                <span>Log out</span>
            </a>
        </div>
    </nav>
  )
}
