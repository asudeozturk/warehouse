
export function saveNewProducts(data) {
    const parsedProducts = parseNewProducts(data)
    saveProductData(parsedProducts)
}

export function getProducts() {
    return readProductData()
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

function saveProductData(data) {
    const productData = readProductData()
    if(productData) {
        for(var code in data) {
            console.log(productData[code])
            if(productData[code]) {
                console.log('exists')
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
  
function readProductData() {
    return JSON.parse(localStorage.getItem('product'))
}
