import React, {useEffect} from 'react'

import menuIconDark from '../assets/icons/menu-dark.svg'
import menuIconLight from '../assets/icons/menu-light.svg'

import logoWithName from '../assets/logo-with-name.png'

import UserPanel from './UserPanel'

function Header(props) {

  useEffect(()=> {
    const menuBtnElement= document.getElementById('menu-btn');
    const menuBtnIconElement= document.querySelector('#menu-btn .icon');

    
    if(menuBtnElement) {
      if(props.isMenuOpen && menuBtnElement.classList.contains('inactive')) {
        menuBtnElement.classList.remove('inactive')
        menuBtnIconElement.setAttribute('src', menuIconLight)
      }
      else {
        menuBtnElement.classList.add('inactive')
        menuBtnIconElement.setAttribute('src', menuIconDark);

      }
    }

  }, [props.isMenuOpen])

  const handleMenuClick = () => {
    props.isMenuOpen ? props.updateMenuStatus(false) : props.updateMenuStatus(true)
  }

  const handleHomeClick = () => {
    props.updatePage('Anasayfa') 
  }

  return (
    <header id='header'>

      <div id='menu-btn-wrapper' className='wrapper' >
        <span aria-hidden></span>
        <button id='menu-btn' className='inactive' aria-label='menü' onClick={handleMenuClick}>
            <img className='icon' src={menuIconDark} alt='menü ikonu' aria-hidden />
        </button>
      </div>
      
      <button onClick={handleHomeClick} className='logo'>
        <img src={logoWithName} alt='warehouse logosu'/>
      </button>

      <UserPanel 
        theme={'dark'}/>
    </header>
  );
}

export default Header;
