import React, { useEffect } from 'react'
import UserPanel from './UserPanel'


import homeIcon from '../assets/icons/home-light.svg'
import prAddIcon from '../assets/icons/product-add-light.svg'
import inventoryIcon from '../assets/icons/inventory-light.svg'
import prRemoveIcon from '../assets/icons/product-remove-light.svg'



function Menu(props) {

  useEffect(()=> {
    const menuElement= document.getElementById('menu');
    
    if(menuElement) {
      if(props.isMenuOpen && menuElement.classList.contains('inactive')) {
        menuElement.classList.remove('inactive')
      }
      else {
        menuElement.classList.add('inactive')
      }
    }

  }, [props.isMenuOpen])

  const handlePageClick = (e) => {
    const btnNameElement = e.currentTarget.querySelector('p')
    if(btnNameElement) {
      props.updatePage(btnNameElement.textContent)
    }

    props.updateMenuStatus(false)

  }

  return (
    <aside id='menu' className='inactive'>
      <nav id='menu-nav'>
        <ul id='menu-list'>
          <li className='menu-item'>
            <button onClick={handlePageClick}>
              <img className='icon' src={homeIcon} alt='ev' aria-hidden/>
              <p>Anasayfa</p>
            </button>
          </li>
          <li className='menu-item'>
            <h4 className='menu-sub-list-heading'>DEPO</h4>
              <ul className='menu-sub-list'>
                <li className='menu-item'>
                  <button onClick={handlePageClick}>
                    <img className='icon' src={prAddIcon} alt='ürün ekleme' aria-hidden/>
                    <p>Ürün Girişi</p>
                  </button>
                </li>
                <li className='menu-item'>
                  <button onClick={handlePageClick}>
                    <img className='icon' src={inventoryIcon} alt='depo' aria-hidden/>
                    <p>Stok Yönetimi</p>
                  </button>
                </li>
                <li className='menu-item'>
                  <button onClick={handlePageClick}>
                    <img className='icon' src={prRemoveIcon} alt='ürün çıkışı' aria-hidden/>
                    <p>Ürün Çıkışı</p>
                  </button>
                </li>
              </ul>
          </li>
        </ul>
      </nav>
      <UserPanel 
        theme={'light'}/>
    </aside>
  );
}

export default Menu;
