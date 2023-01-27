import React, {useState} from 'react'
import {Header, Modal, Button } from 'semantic-ui-react'
import {removeProducts, getProducts} from '../utilities/dataUtility.js'
import deleteIcon from '../assets/icons/close-blue.svg'

function RemoveProductPage() {
    
    const defaultEntry = {
        'productCode': '',
        'productAmount': 0
    }

    const [entries, setEntries] = useState([defaultEntry]) // keeps track of user entries
    const [formPopup, setFormPopup] = useState(false)
    const [popupMessage, setPopupMessage] = useState();


    const renderProductEntries = () => { //display user entries in the form
        return entries.map((item,index) => {
            return (
                <div className='pr-item form-field-wrapper' key={index}>
                    {entries.length > 1 && 
                        <button type='button' className='pr-delete-btn' onClick={() => handleDeleteEntry(index)} aria-label='ürünü sil'>
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
                            onChange={(event) => handleUpdateEntry(index, "productCode", event.target.value)}/>
                    </div>

                    <div className='pr-amount-field form-field'>
                        <label htmlFor='form-pr-amount'>Ürün Adedi</label>
                        <input 
                            type='number' 
                            name='form-pr-amount' 
                            min="1" 
                            required
                            value={item.productAmount}
                            onChange={(event) => handleUpdateEntry(index, "productAmount", event.target.value)}/>
                    </div>
                    
                </div>
            )
        })
    }

    const renderFormPopup = () => { //display popup  with  message when form is submitted
        const icon = popupMessage.type === 'success' ? 'check circle' : 'times circle'
        return (
            <Modal id='form-popup'
                closeIcon
                open={formPopup}
                onClose={() => setFormPopup(false)}
                size={'tiny'}>
                
                <Header icon={icon} content={popupMessage.header}/>
                <Modal.Content>
                    <p>
                        {popupMessage.message}
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setFormPopup(false)}>
                        Tamam
                    </Button>
                </Modal.Actions>
            </Modal>
        )     
    }


    const handleAddEntry = () => { //add an empty new entry to the list
        setEntries([...entries, {...defaultEntry}])
    }

    const handleDeleteEntry = (index) => { //delete entry from the list
        const updatedEntries = entries.slice(0, index).concat(entries.slice(index+1))        
        setEntries(updatedEntries)
    }

    const handleUpdateEntry = (index, attribute, value) => { //update product data when inputs change
        const updatedEntries = [...entries]
        updatedEntries[index][attribute] = value;
        setEntries(updatedEntries);
    }


    const handleFormSubmit = (e) => { // validate form entries remove products on success
        e.preventDefault();  
        
        const button = document.getElementById('remove-product-submit-btn')
        button.classList.toggle('sending')
        button.setAttribute('disabled', true)

        
        if(validateEntries()) {
            removeProducts(entries)
            setPopupMessage({
                'type' : 'success',
                'header' : 'Ürün Çıkışı Başarılı',
                'message' : `${entries.length} ürün için ürün çıkış işlemi yapıldı`
            }) 
            setFormPopup(true)
            setEntries([defaultEntry]) 
        }
        else {
        }

        
        

        button.classList.toggle('sending');
        button.removeAttribute('disabled');
    }

    const validateEntries = () => { //validate form inputs display errors in case of failure
        const prData = getProducts()
        const prNotFoundIndecies = []
        const prInsufficientIndecies = []

        const products = prData ? prData : {}

        entries.forEach((item,index) => {
            if(!products[item['productCode']]) {
                prNotFoundIndecies.push(index)
            }
            else if(products[item['productCode']]['amount'] < item.productAmount) {
                prInsufficientIndecies.push(index)
            }
        })

        removeOldErrors()
        displayNotFoundError(prNotFoundIndecies)
        displayInsufficientError(prInsufficientIndecies) 

        if(prNotFoundIndecies.length > 0 || prInsufficientIndecies.length > 0) {
            return false
        }
        return true
    }

    const removeOldErrors = () => {
        const errorMessage =  document.querySelectorAll('#remove-product-form .pr-item .error-message')
        errorMessage.forEach( element=> {
            element.remove()
        })
    }

    const displayNotFoundError = (indecies) => { //add error message if product is not found
        const inputs =  document.querySelectorAll('#remove-product-form .pr-item')
       
        
        indecies.forEach(index => {
            var message = document.createElement('p')
            message.classList.add('error-message')
            message.innerHTML='Girilen ürün stokta mevcut değil'
            inputs[index].insertBefore(message, inputs[index].firstChild)
        })
    }

    const displayInsufficientError = (indecies) => { //add error messages if product amount is wrong
        const inputs =  document.querySelectorAll('#remove-product-form .pr-item')
        
        
        indecies.forEach(index => {
            var message = document.createElement('p')
            message.classList.add('error-message')
            message.innerHTML='Girilen adet stok adedinden fazladır'
            inputs[index].insertBefore(message, inputs[index].firstChild)
        })
    }

    return (
        <main id='remove-product-page' className='page-content'>
            <h1 className='page-heading'>Depo Ürün Çıkışı</h1>

            <section id='remove-product-form' className='page-section'>
                <form name='remove-product' onSubmit={handleFormSubmit}>
                    {renderProductEntries()}
                    
                    <button id='new-btn' type='button' onClick={handleAddEntry}>+ Başka Ürün Ekle</button>
                    <input id='remove-product-submit-btn' type='submit' value='Ürün Çıkışı Yap'/>

                    {formPopup && renderFormPopup()}
                </form>
            </section>
        </main>
    );
}

export default RemoveProductPage;