import axios from 'axios';
import { useForm } from 'react-hook-form';

const Registration=()=> {
    const{register,handleSubmit}=useForm()
                    
    const onSubmit=(data)=>{ 
        axios.post('http://localhost:8888/back/api/registration.php',
        JSON.stringify(data))
        .then(response =>console.log(response))
    }

    return (
        <form onSubmit ={handleSubmit(onSubmit)} className="registration">
            <div className="form__input">
                <input type="text"  {...register('firstname')} placeholder="Ім'я"/>
            </div>
            <div className="form__input">
                <input type="text"  {...register('lastname')} placeholder="Прізвище" />
            </div>
            <div className="form__input">
                <input type="text"  {...register('phone')} placeholder="Телефон"/>
            </div>
            <div className="form__input">
                <input type="text"  {...register('email')} placeholder="Пошта"/>
            </div>
            <div className="form__input">
                <input type="text"  {...register('password')} placeholder="Пароль"/>
            </div> 
            <button  className="form__button" type="submit"  >
                Реєстрація
            </button>
        </form>                     
    )
}

export default Registration
