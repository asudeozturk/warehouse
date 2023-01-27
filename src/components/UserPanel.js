import React from 'react'

import helpIconDark from '../assets/icons/help-dark.svg'
import helpIconLight from '../assets/icons/help-light.svg'
import settingsIconDark from '../assets/icons/settings-dark.svg'
import settingsIconLight from '../assets/icons/settings-light.svg'
import logoutIconDark from '../assets/icons/logout-dark.svg'
import logoutIconLight from '../assets/icons/logout-light.svg'
import profileIcon from '../assets/icons/profile.svg'


function UserPanel(props) {

  var theme = props.theme
  return (
    <section className='user-panel'>
        <div className='btn-wrapper'>
            <button aria-label='yardım'>
                <img className='icon' src={theme === 'dark' ? helpIconDark : helpIconLight} alt='soru işareti' aria-hidden />
            </button>
            <button aria-label='ayarlar'>
                <img className='icon' src={theme === 'dark' ? settingsIconDark : settingsIconLight} alt='ayarlar' aria-hidden />
            </button>
            <button aria-label='oturumu kapat'>
                <img className='icon' src={theme === 'dark' ? logoutIconDark : logoutIconLight} alt='çıkış' aria-hidden />
            </button>
        </div>
        <div className='user-wrapper'>
            <p className='profile-name'>Admin</p>
            <img className='profile-photo' src={profileIcon} alt='kullanıcı profili'/>
        </div>
    </section>
  );
}

export default UserPanel;
