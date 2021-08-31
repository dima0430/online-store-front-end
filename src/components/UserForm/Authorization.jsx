import Cookie from 'js-cookie'
import {useDispatch} from 'react-redux'
import { logIn } from '../../redux/actions/logInOut'
import { authorization } from '../../api/API'
import { getLikedProducts } from '../../redux/actions/products'
import { useForm } from "react-hook-form";
import { UserSvg ,LockSvg} from '..'


const Authorization=({visible})=>{
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();

    const onSubmit =async(data) =>{
        await authorization(data)
        .then(response=>{Cookie.set('jwt',response.jwt); return response})
        .then(response=>dispatch(logIn(JSON.stringify({'jwt': response.jwt}))))
        .then(response=>dispatch(getLikedProducts(response.id)))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="authorization">    
            <div className="form__input input-login" >
                <input type="text"  {...register("email")} placeholder ="Логін" />
                <UserSvg width='20' height='20'/>
            </div>
            <div className="form__input input-password">
                <input type="password"  {...register("password")} placeholder = "Пароль" />
                <LockSvg/>
            </div>
            <button className="form__button">Вхід</button>        
        </form>
    )
}

export default Authorization

