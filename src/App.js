import React, {useState} from 'react'
import LoginPage from './page-components/LoginPage'
import MainPage from './page-components/MainPage'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const updateIsLoggedIn = (status) => {
      setIsLoggedIn(status)
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
