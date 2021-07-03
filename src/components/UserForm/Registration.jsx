import React,{useState} from 'react'
import axios from 'axios';

function Registration() {
    const [client, setClient] = useState({firstname:'d1', lastname:'d2', phone:'d3', email:'d4', password:'d5'})
    
    
    const inputs = [{name:"firstname",type:"text",placeholder:"Ім'я"},
                    {name:"lastname" ,type:"text",placeholder:"Прізвище"},
                    {name:"phone" ,type:"tel",placeholder:"Телефон"},
                    {name:"email",type:"mail",placeholder:"Пошта"},      
                    {name:"password" ,type:"password" ,placeholder:"Пароль"}]
    
                    
    const onSubmit=(e)=>{ 
        e.preventDefault()
        axios.post('http://localhost:8888/back/api/registration.php',
        JSON.stringify(client))
        .then(response =>console.log(response))
    }
    const onChangeInputs=(e)=>{
        setClient(prev=>({...prev,...{[e.target.name]:e.target.value}}))
    }

    return (
        <form onSubmit ={onSubmit} className="registration">    
            {inputs.map(({name,type,placeholder},i)=>{return(<div key={name} className ="form__input">    
                <input
                    name={name} 
                    type={type} 
                    placeholder={placeholder} 
                    value ={client[name]}
                    onChange={onChangeInputs}
                    />
            </div>)})}
            <button  className="form__button" type="submit"  >
                Реєстрація
            </button>
        </form>                     
    )
}

export default Registration




























/* <div className ="user-form__input">    
                <input
                    name="surname" 
                    type="text"
                    placeholder="Прізвище"/>
            </div>
            <div className ="user-form__input">    
                <input
                    name="phone" 
                    type="tel"
                    placeholder="Телефон"/>
            </div>
            <div className ="user-form__input">    
                <input
                    name="mail" 
                    type="tel"
                    placeholder="Пошта"/>
            </div>
            <div className ="user-form__input">    
                <input
                    name="password" 
                    type="password"
                    placeholder="Пароль"/>                          
            </div> */