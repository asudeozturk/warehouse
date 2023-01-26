import React from 'react'

function LoginForm(props) {

    const handleLogin = () => {
        props.updateLogin(true)
    }

    return (
        <section id='login-form'>
            <h1 className='heading'>Kullanıcı Girişi</h1>

            <form onSubmit={handleLogin}>
                <div className='form-field'>
                    <label htmlFor='form-user-name'>Kullanıcı Adı</label>
                    <input type='text' id='form-user-name' name='form-user-name' required/>
                </div>

                <div className='form-field'>
                    <label htmlFor='form-password'>Şifre</label>
                    <input type='password' id='form-password' name='form-password' required/>
                </div>

                <div className='form-field-wrapper'>
                    <div className='form-field'>
                        <input type='checkbox' id='login-remember' name='login-remember' value='remember' />
                        <label htmlFor='login-remember'>Beni Hatırla</label>
                    </div>
                    <button id='login-forgot-btn' type='button'>Şifremi Unuttum</button>
                </div>
                
                <input id='login-submit-btn' type='submit' value='Giriş Yap' />
            </form>

        </section>
    )

}

export default LoginForm;

