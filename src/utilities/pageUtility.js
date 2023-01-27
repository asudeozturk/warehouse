export function getPageData() {

    const page = localStorage.getItem('page')
   
    if(page) {
        return page
    } 
    else {
        return 'Anasayfa'

    }


 
}

export function savePageData (page) {
    localStorage.setItem('page', page)

}