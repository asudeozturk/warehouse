import React, {useEffect} from 'react'
import UserPanel from './UserPanel'

import menuIconDark from '../assets/icons/menu-dark.svg'
import menuIconLight from '../assets/icons/menu-light.svg'
import logoWithName from '../assets/logo-with-name.png'


function Header(props) {

  useEffect(()=> { //change style of menu button when menu is open / closed
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

  const handleMenuClick = () => { //update whether men is open or closed
    props.isMenuOpen ? props.updateMenuStatus(false) : props.updateMenuStatus(true)
  }

  const handleHomeClick = () => { //navigate to home page
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
        theme={'dark'}
        updateLogin= {props.updateLogin}/>
    </header>
  );
}

export default Header;
