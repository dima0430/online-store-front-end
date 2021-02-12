import React from 'react'

function Registration() {
    return (
        <div className="registration">
                        <label className="user-form__label" htmlFor="name">
                            Ім'я
                        </label>
                        <div className="user-form__input">                        
                            <input  type="text" id="name" />
                        </div>    
                        <label className="user-form__label" htmlFor="surname">
                            Прізвище
                        </label>                        
                        <div className="user-form__input">                        
                            <input type="text"      id="surname" />
                        </div>
                        <label className="user-form__label" htmlFor="phone">
                            Телефон
                        </label>                        
                        <div className="user-form__input">
                            <input type="tel" name="phone"/>                        
                        </div>
                        <label className="user-form__label" htmlFor="mail">
                            Пошта
                        </label>                        
                        <div className="user-form__input">                        
                            <input type="email"      id="mail" />
                        </div>
                        <label className="user-form__label"   htmlFor="password">
                            Пароль
                        </label>
                        <div className="user-form__input">
                            <input type="password"  id="password" />
                        </div>
                        <label className="user-form__label"   htmlFor="password">
                            Ще раз пароль
                        </label>
                        <div className="user-form__input">
                            <input type="password"  id="password" />
                        </div>
                    </div>
    )
}

export default Registration
