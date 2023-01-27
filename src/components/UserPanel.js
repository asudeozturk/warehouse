import React from 'react'
import { Popup } from 'semantic-ui-react'

import settingsIconDark from '../assets/icons/settings-dark.svg'
import settingsIconLight from '../assets/icons/settings-light.svg'
import logoutIconDark from '../assets/icons/logout-dark.svg'
import logoutIconLight from '../assets/icons/logout-light.svg'
import profileIcon from '../assets/icons/profile.svg'


function UserPanel(props) {

  var theme = props.theme // dark or light theme

  const renderUserActions = () => { //render actions for user control panel
    return (
      <div className='btn-wrapper'>
        <button aria-label='ayarlar'>
            <img className='icon' src={theme === 'dark' ? settingsIconDark : settingsIconLight} alt='ayarlar' aria-hidden />
        </button>
        <Popup 
          content='Oturumu Kapat' 
          size='tiny'
          trigger={
            <button onClick={handleLogout} aria-label='oturumu kapat'>
              <img className='icon' src={theme === 'dark' ? logoutIconDark : logoutIconLight} alt='çıkış' aria-hidden />
            </button>
          } />
      </div>
    )
  }

  const renderUserProfile = () => { //render user profile photo and name
    return (
      <div className='user-wrapper'>
        <p className='profile-name'>Admin</p>
        <img className='profile-photo' src={profileIcon} alt='kullanıcı profili'/>
    </div>
    )
  }

  const handleLogout = () => { //logout when logout button is clicked
    props.updateLogin(false)
  }

  return (
    <section className='user-panel'>
       
      {renderUserActions()}
      {renderUserProfile()}
      
    </section>
  );
}

export default UserPanel;
