import React from 'react'

import loginBackground from '../assets/login-bg.png'
import logoWithName from '../assets/logo-with-name.png'

import LoginForm from '../components/LoginForm'

function LoginPage(props) {
   
    return (
        <main id='login-page' className='page'>
            
            <img className='bg-img' src={loginBackground} alt='mavi arka plan' aria-hidden/>
            
            <section id='login'>
                <img className='logo' src={logoWithName} alt='warehouse logosu'/>
                <LoginForm updateLogin={props.updateLogin} />
            </section>
        </main>
    );
}

export default LoginPage;
