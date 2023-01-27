import React, {useState} from 'react'
import {getPageData, savePageData} from '../utilities/pageUtility'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import HomePage from '../page-components/HomePage'
import AddProductPage from '../page-components/AddProductPage'
import StockPage from '../page-components/StockPage'
import RemoveProductPage from '../page-components/RemoveProductPage'


function MainPage(props) {

  const [currentPage, setCurrentPage] = useState(getPageData()); //keeps track of the page to display
  const [isMenuOpen, setIsMenuOpen] = useState(false); //true: menu is open , false: menu is closed

  const updateIsMenuOpen = (status) => {
    setIsMenuOpen(status)
  }

  const updateCurrentPage = (pageName) => {
    setCurrentPage(pageName)
    savePageData(pageName)
  }

  const pages = { //stores page components
    'Anasayfa': <HomePage updatePage = {updateCurrentPage} />,
    'Ürün Girişi': <AddProductPage/>,
    'Stok Yönetimi': <StockPage updatePage = {updateCurrentPage}/>,
    'Ürün Çıkışı': <RemoveProductPage />,
  }

  const renderPage = () => { //returns the appropriate page component to render
    return pages[currentPage]
  }

  return (
    <div id='main-page' className='page'>
      <Header 
        isMenuOpen = {isMenuOpen}
        updateMenuStatus = {updateIsMenuOpen}
        updatePage = {updateCurrentPage}
        updateLogin = {props.updateLogin}/>
    
      <Menu 
        isMenuOpen = {isMenuOpen}
        updateMenuStatus = {updateIsMenuOpen}
        updatePage = {updateCurrentPage}
        updateLogin = {props.updateLogin}/>
      
      {renderPage()}

      <Footer 
        updatePage = {updateCurrentPage}/>
    </div>
  );
}

export default MainPage;
