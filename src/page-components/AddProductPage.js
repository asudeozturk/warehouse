import React, {useState} from 'react'
import {saveNewProducts} from '../utilities/dataUtility.js'
import deleteIcon from '../assets/icons/close-blue.svg'

function AddProductPage() {

    const defaultEntry = {
        'productCode': '',
        'productDesc': '',
        'productAmount': 0
    }

    const [newProducts, setNewProducts] = useState([defaultEntry])

   
    const renderProductEntries = () => {
        return newProducts.map((item,index) => {
            return (
                <div className='pr-item form-field-wrapper' key={index}>
                    {newProducts.length > 1 && 
                        <button type='button' className='pr-delete-btn' onClick={() => handleDeleteProduct(index)} aria-label='ürünü sil'>
                            <img className='icon' src={deleteIcon} alt='çarpı' aria-hidden/>
                        </button>
                    }
                    <div className='pr-code-field form-field'>
                        <label htmlFor='form-pr-code'>Ürün Kodu</label>
                        <input 
                            type='text' 
                            name='form-pr-code' 
                            required
                            value={item.productCode}
                            onChange={(event) => handleUpdateProduct(index, "productCode", event.target.value)}/>
                    </div>
                    <div className='pr-desc-field form-field'>
                        <label htmlFor='form-pr-desc'>Ürün Açıklaması</label>
                        <input 
                            type='text' 
                            name='form-pr-desc' 
                            value={item.productDesc}
                            onChange={(event) => handleUpdateProduct(index, "productDesc", event.target.value)}/>
                    </div>
                    <div className='pr-amount-field form-field'>
                        <label htmlFor='form-pr-amount'>Ürün Adedi</label>
                        <input 
                            type='number' 
                            name='form-pr-amount' 
                            min="1" 
                            required
                            value={item.productAmount}
                            onChange={(event) => handleUpdateProduct(index, "productAmount", event.target.value)}/>
                    </div>
                    
                </div>
            )
        })
    }


    const handleAddProduct = () => {
        setNewProducts([...newProducts, {...defaultEntry}])
    }

    const handleDeleteProduct = (index) => {
        const updatedProducts = newProducts.slice(0, index).concat(newProducts.slice(index+1))        
        setNewProducts(updatedProducts)
    }

    const handleUpdateProduct = (index, attribute, value) => {
        const updatedProducts = [...newProducts]
        updatedProducts[index][attribute] = value;
        setNewProducts(updatedProducts);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();  

        saveNewProducts(newProducts)
    }

    return (
        <main id='add-product-page' className='page-content'>
            <h1 className='page-heading'>Depo Ürün Girişi</h1>

            <section id='add-product-form' className='page-section'>
                <form name='add-product' onSubmit={handleFormSubmit}>
                   {renderProductEntries()}
                   <button id='new-btn' type='button' onClick={handleAddProduct}>+ Yeni Ürün Ekle</button>
                   <input id='add-product-submit-btn' type='submit' value='Ürün Girişi Yap'/>
                </form>
            </section>
        </main>
    );
}

export default AddProductPage;