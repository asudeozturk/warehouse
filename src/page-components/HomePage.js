import React from 'react'

import prAddIconBlue from '../assets/icons/product-add-blue.svg'
import inventoryIconBlue from '../assets/icons/inventory-blue.svg'
import prRemoveIconBlue from '../assets/icons/product-remove-blue.svg'

import prAddIconLight from '../assets/icons/product-add-light.svg'
import inventoryIconLight from '../assets/icons/inventory-light.svg'
import prRemoveIconLight from '../assets/icons/product-remove-light.svg'

function HomePage(props) {
    
    const inventoryActions = { //store info about icons
        'Ürün Girişi': {
            blueIcon : prAddIconBlue,
            lightIcon : prAddIconLight
        },
        'Stok Yönetimi': {
            blueIcon : inventoryIconBlue,
            lightIcon : inventoryIconLight
        },
        'Ürün Çıkışı': {
            blueIcon : prRemoveIconBlue,
            lightIcon : prRemoveIconLight
        }
    } 

    const handleActionClick = (e) => { //change current page and navigate
        const btnNameElement = e.currentTarget.querySelector('p');
        if(btnNameElement) {
            props.updatePage(btnNameElement.textContent);
        }
    }

    const handleActionHover = (e) => { //style elements on hover
        const btnNameElement = e.currentTarget.querySelector('p');
        const btnIconElement = e.currentTarget.querySelector('.icon');

        if(btnNameElement && btnIconElement) {
            const newIcon = inventoryActions[btnNameElement.textContent].lightIcon;
            btnIconElement.setAttribute('src',newIcon )
        }
    }
    
    const handleActionUnHover = (e) => { //style elements to defaul on unhover
        const btnNameElement = e.currentTarget.querySelector('p');
        const btnIconElement = e.currentTarget.querySelector('.icon');

        if(btnNameElement && btnIconElement) {
            const newIcon = inventoryActions[btnNameElement.textContent].blueIcon;
            btnIconElement.setAttribute('src',newIcon )
        }
    }

    return (
        <main id='home-page' className='page-content'>
           <h1 className='page-heading'>Genel Bakış</h1>
           
           <section id='home-inventory-actions' className='page-section'>
                <h2 className='section-heading'>Depo</h2>
                <ul id='home-inventory-actions-list'>
                    <li>
                        <button className='action-btn' onClick={handleActionClick} onMouseOver={handleActionHover} onMouseOut={handleActionUnHover}>
                            <img className='icon' src={prAddIconBlue} alt='ürün girişi' aria-hidden />
                            <p>Ürün Girişi</p>
                        </button>
                    </li>
                    <li>
                        <button className='action-btn' onClick={handleActionClick} onMouseOver={handleActionHover} onMouseOut={handleActionUnHover}>
                            <img className='icon' src={inventoryIconBlue} alt='stok' aria-hidden />
                            <p>Stok Yönetimi</p>
                        </button>
                    </li>
                    <li>
                        <button className='action-btn' onClick={handleActionClick} onMouseOver={handleActionHover} onMouseOut={handleActionUnHover}>
                            <img className='icon' src={prRemoveIconBlue} alt='ürün çıkışı' aria-hidden />
                            <p>Ürün Çıkışı</p>
                        </button>
                    </li>
                </ul>
           </section>
        </main>
    );
}

export default HomePage;