export function getLoginStatus () {

    const status = localStorage.getItem('loginStatus')
    
    if(status) {
        return true
    }
    return false
}

export function saveLoginStatus (status) {
    localStorage.setItem('loginStatus', status)

    if(!status) {
        localStorage.removeItem('page')
    }
}