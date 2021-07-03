import React,{useState} from 'react'
import Cookie from 'js-cookie'
import {useDispatch} from 'react-redux'
import { logIn } from '../../redux/action'
import { authorization } from '../../api/API'

function Authorization() {
    const dispatch = useDispatch()
    const [auth, setAuth] = useState({email:'',password:''})
    const onChangeInputs=(e)=>{
        setAuth(prev=>({...prev,...{[e.target.name]:e.target.value}}))
    }
    const onSubmit =async (e) =>{
        e.preventDefault();
        await authorization(auth)
        .then(response=>{Cookie.set('jwt',response.jwt); return response})
        .then(response=>dispatch(logIn(JSON.stringify({'jwt': response.jwt}))))
    }
    return (
        <form onSubmit={onSubmit} className="authorization">    
            <div className="form__input input-login" >
                <input type="text"  name="email" placeholder ="Логін"  onChange={onChangeInputs}/>
            </div>
            <div className="form__input input-password">
                <input type="password"  name="password" placeholder = "Пароль" onChange={onChangeInputs} />
            </div>
            <button className="form__button" type="submit">
                Вхід
            </button>        
        </form>
    )
}

export default Authorization

