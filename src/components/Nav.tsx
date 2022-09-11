import React from 'react'

// images imports
import logo from '../assets/logo2.png';
import _3pplIcon from '../assets/3-people.png';
import logoutIcon from '../assets/logout.png';

// partials imports
import ImageIcon from '../partials/ImageIcon'

function Nav(): JSX.Element {
  return (
    <nav className="nav">
        <a href="#" className='logo'>
            <ImageIcon image={logo} />
        </a>
        <input type="checkbox" id="toggleNav" />
        <label htmlFor="toggleNav" className='burgerBtn'>
            ☰
        </label>
        <div className="links_group">
            <a href="#">
                <ImageIcon image={_3pplIcon} />
                <span>6 connected</span>
            </a>
            <a href="#">
                <ImageIcon image={logoutIcon} />
                <span>Log out</span>
            </a>
        </div>
    </nav>
  )
}

export default Nav;