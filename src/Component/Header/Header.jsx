import React from 'react';
import { MenuOutlined,Close } from '@material-ui/icons';
import header from './header.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  const [Active, setActive] = useState(false);
  const showMenu = () => {
    setActive(true);
  }
  const closeMenu = () => {
    setActive(false);
  }
  return (
    <>
      <div className='Header'>
          <div className='top'>
            <div className='the'>The</div>
            <div className='Name'>Siren</div>
          </div>
          <div className="menu-icon">
            <MenuOutlined className='menu' onClick={showMenu} />
          </div>
       
        <nav className={Active ? 'slider active' : 'slider'}>
          <ul>
            <div className='closed'>
              <Close className="close" onClick={closeMenu} />
            </div>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/bollywood'>Bollywood</NavLink>
            </li>

            <li>
              <NavLink to='/tech'>Technology</NavLink>
            </li>
            <li>
              <NavLink to='/bollywood'>Hollywood</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header;