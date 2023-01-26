import React, {useState } from 'react'
import {Pagination, Table, TableHeader, TableHeaderCell } from 'semantic-ui-react';
import { getProducts } from '../utilities/dataUtility'

function StockPage(props) {
   
    const entryPerPage = 10
    const [productData, setProductData] = useState(getProducts())
    const [activePage, setActivePage] = useState(1)
    

    const renderTable = () => {
        return (
        <>
            <Pagination
                id='stock-pagination'
                activePage={activePage}
                onPageChange={handlePaginationChange}
                totalPages={Math.ceil(Object.keys(productData).length/entryPerPage)}
                ellipsisItem={null}/>
            
            <Table id='stock-table'  unstackable celled striped >
                {getTableHeader()}
                {getTableRows()}
            </Table>
        </>
        )
    }

    const renderNoProductInfo = () => {
        return (
            <section id='stock-no-product'>
                <h4>Şuan depoda ürün bulunmuyor. Ürün Girişi sayfasından eklediğiniz ürünler burada görünecektir.</h4>
                <button className='navigate-btn' onClick={handleNavigatePageClick}>Ürün Girişi Sayfasına Git</button>
            </section>
            
        )
    }

    const getTableHeader = () => {
        return  (
            <TableHeader>
                <Table.Row verticalAlign='middle' textAlign='center'>
                    <TableHeaderCell>Ürün Kodu</TableHeaderCell>
                    <TableHeaderCell>Ürün Açıklaması</TableHeaderCell>
                    <TableHeaderCell>Ürün Adedi</TableHeaderCell>
                </Table.Row>
            </TableHeader>
        )
    }

    const getTableRows = () => {   
        const start = (activePage-1)*entryPerPage
        const end = (activePage-1)*entryPerPage + entryPerPage
        return (
            <Table.Body>
                {Object.keys(productData).slice(start, end).map((code, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell textAlign="center">{code}</Table.Cell>
                            <Table.Cell>{productData[code]['desc']}</Table.Cell>
                            <Table.Cell textAlign="center">{productData[code]['amount']}</Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        )
    }

    const handlePaginationChange = (e) => {
        setActivePage(parseInt(e.target.attributes['value'].value))
    }

    const handleNavigatePageClick = () => {
        props.updatePage('Ürün Girişi')
    }

    return (
        <main id='stock-page' className='page-content'>
            <h1 className='page-heading'>Depo Stok Yönetimi</h1>

            { productData 
                ? renderTable()
                : renderNoProductInfo()
            }
        </main>
    );
}

export default StockPage;