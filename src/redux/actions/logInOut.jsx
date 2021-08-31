import axios from "axios"

export const logIn =(token)=>{    
    return async dispatch => {
        try{
            const response= await axios.post('http://localhost:8888/back/api/validate_token.php',token)
           const json =await response.data.data    
           dispatch({
                    type:"LOG_IN",
                    id:+json.id,
                    firstname:json.firstname,
                    lastname:json.lastname,
                    email:json.email,
                    phone:json.phone,
                    login:true
                })
                
            return json     
            }
        catch(error){
            console.log(error);
        }
    }
}
export const logOut = ()=> ({
    type: 'LOG_OUT'
});