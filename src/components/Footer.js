import React from 'react'
import logoWithName from '../assets/logo-with-name.png'


function Footer(props) {

    const renderMenuBar = () => {
        return (
            <nav id='footer-nav'>
                <ul id='footer-nav-list'>
                    <li id='footer-home-section'>
                        <button className='main-btn' onClick={() => {handlePageClick('Anasayfa')}}>ANASAYFA</button>
                    </li>
                    <li id='footer-inventory-section'>
                        <button className='main-btn'>DEPO</button>
                        <ul className='footer-nav-sub-list'>
                            <li><button className='sub-btn' onClick={() => {handlePageClick('Ürün Girişi')}}>Ürün Girişi</button></li>
                            <li><button className='sub-btn' onClick={() => {handlePageClick('Stok Yönetimi')}}>Stok Yönetimi</button></li>
                            <li><button className='sub-btn' onClick={() => {handlePageClick('Ürün Çıkışı')}}>Ürün Çıkışı</button></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }

    const renderCopyright = () => {
        return (
            <section id="copyright">
                <p>Copyright &copy; 2023 Warehouse</p>
                <ul id="copyright-list">
                    <li><p>Aydınlatma Metni</p></li>
                    <li><p>Erişilebilirlik</p></li>
                </ul>
          </section>
        )
    }

    const handlePageClick = (page) => { //update page when any of the navigation link clicked
        props.updatePage(page)
    }

    return (
        <footer id='footer'>
            {renderMenuBar()}

            <div id='footer-company-info'>
                <img className='logo' src={logoWithName} alt='warehouse logosu'/>
                <h4>Hızlı ve güvenilir stok yönetimi</h4>
                
                <div id='company-contact'>
                    <p className='contact-info'>+90 212 123 45 67</p>
                    <p className='contact-info'>ornek@ornek.com</p>
                </div>
               

            </div>

            {renderCopyright()}
        </footer>
    )

}

export default Footer