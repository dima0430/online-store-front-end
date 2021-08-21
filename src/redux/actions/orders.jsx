import axios from "axios";

export const getOrdersAdmin=()=>{
    return async dispatch =>{
        try{
            const response = await axios.get('http://localhost:8888/back/api/read_orders_admin.php')
            const json = await response.data;
            dispatch({
                type:'GET_ORDERS_ADMIN',
                payload:json
            })
            console.log(json)
        }
        catch(error){
            console.log(error);
        }
    }
}