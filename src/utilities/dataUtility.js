
export function addProducts(data) {
    const parsedProducts = parseNewProducts(data)
    saveProductData(parsedProducts)
}

export function getProducts() {
    return readProductData()
}

export function removeProducts(data) {
    const parsedProducts = parseProductsToRemove(data)
    removeFromProductData(parsedProducts)
}


function parseNewProducts(data) {
    const parsed = {}

    data.forEach(item => {
        if(parsed[item.productCode]) {
            parsed[item.productCode]['desc'] = item.productDesc
            parsed[item.productCode]['amount'] += parseInt(item.productAmount)
        }
        else {
            parsed[item.productCode] = {
                'desc': item.productDesc,
                'amount': parseInt(item.productAmount)
            }
        }
    });

    return parsed
}

function parseProductsToRemove(data) {
    const parsed = {}

    data.forEach(item => {
        parsed[item.productCode] = {
            'amount': parseInt(item.productAmount)
        }        
    });

    return parsed
}


function saveProductData(data) {
    const productData = readProductData()
    if(productData) {
        for(var code in data) {
            if(productData[code]) {
                productData[code]['desc'] = data[code].desc
                productData[code]['amount'] += data[code].amount
            }
            else {
                productData[code] = {
                    'desc': data[code].desc,
                    'amount': data[code].amount
                }
            }
        }
        localStorage.setItem('product', JSON.stringify(productData))

    }
    else {
        localStorage.setItem('product', JSON.stringify(data))
    }

    
}

function removeFromProductData(data) {
    const productData = readProductData()
    if(productData) {
        for(var code in data) {
            productData[code]['amount'] -= data[code].amount
            

            if(productData[code]['amount'] == 0) {
                delete productData[code]
            }
        }
        localStorage.setItem('product', JSON.stringify(productData))
    }
}

function readProductData() {
    return JSON.parse(localStorage.getItem('product'))
}
