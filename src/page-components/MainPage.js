import React, {useState, useEffect} from 'react'

import Header from '../components/Header'
import Menu from '../components/Menu'
import HomePage from '../page-components/HomePage'
import AddProductPage from '../page-components/AddProductPage'
import StockPage from '../page-components/StockPage'
import RemoveProductPage from '../page-components/RemoveProductPage'


function MainPage() {

  

  const [currentPage, setCurrentPage] = useState('Anasayfa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const updateIsMenuOpen = (status) => {
    setIsMenuOpen(status)
  }

  const updateCurrentPage = (pageName) => {
    setCurrentPage(pageName)
  }

  const pages = {
    'Anasayfa': <HomePage updatePage = {updateCurrentPage} />,
    'Ürün Girişi': <AddProductPage/>,
    'Stok Yönetimi': <StockPage updatePage = {updateCurrentPage}/>,
    'Ürün Çıkışı': <RemoveProductPage />,
  }

  const renderPage = () => {
    return pages[currentPage]
  }

  return (
    <div id='main-page' className='page'>
      <Header 
        isMenuOpen = {isMenuOpen}
        updateMenuStatus = {updateIsMenuOpen}/>
    
      <Menu 
        isMenuOpen = {isMenuOpen}
        updateMenuStatus = {updateIsMenuOpen}
        updatePage = {updateCurrentPage}/>
      
      {renderPage()}
    </div>
  );
}

export default MainPage;
