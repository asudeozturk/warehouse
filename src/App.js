import React, {useState} from 'react'
import { getLoginStatus, saveLoginStatus} from './utilities/loginUtility'
import LoginPage from './page-components/LoginPage'
import MainPage from './page-components/MainPage'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(getLoginStatus())

  const updateIsLoggedIn = (status) => {
      setIsLoggedIn(status)
      saveLoginStatus(status)
  }

  return (
    <div className='app'>
      {isLoggedIn
        ? <MainPage 
            updateLogin = {updateIsLoggedIn} />
        : <LoginPage 
            updateLogin = {updateIsLoggedIn} /> 
      }
    </div>
  );
}

export default App;
