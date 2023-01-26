import React from 'react'

import helpIcon from '../assets/icons/help.svg'
import settingsIcon from '../assets/icons/settings.svg'
import profileIcon from '../assets/icons/profile.svg'

function UserPanel() {

  return (
    <section id='user-panel'>
        <div id='btn-wrapper' className='wrapper'>
            <button aria-label='yardım'>
                <img className='icon' src={helpIcon} alt='soru işareti' aria-hidden />
            </button>
            <button aria-label='ayarlar'>
                <img className='icon' src={settingsIcon} alt='ayarlar' aria-hidden />
            </button>
        </div>
        <div id='profile-wrapper' className='wrapper'>
            <p id='profile-name'>Kullanıcı</p>
            <img id='profile-photo' src={profileIcon} alt='kullanıcı profili'/>
        </div>
    </section>
  );
}

export default UserPanel;
