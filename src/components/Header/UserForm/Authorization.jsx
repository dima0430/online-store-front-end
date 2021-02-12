import React from 'react'

function Authorization() {
    return (
        <div className="authorization">    
            <label className="user-form__label"htmlFor="login">
                Логін
            </label>
            <div className="user-form__input input-login" >
                <input type="text"  id="login" />
            </div>
            <label className="user-form__label"   htmlFor="password">
                Пароль
            </label>
            <div className="user-form__input input-password">
                <input type="password"  id="password" />
            </div>
            <div className="user-form__forgot">
                Забули пароль?
            </div> 
            <button className="user-form__button">
                Вхід
            </button>
        </div>
    )
}

export default Authorization
