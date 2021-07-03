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
                console.log(json)
            }
        catch(error){
            console.log(error);
        }    
    }
}

export const getCategories=()=>{
    return async dispatch =>{
        try{
            const response = await axios.get('http://localhost:8888/back/api/read_categories.php')
            const json = await response.data.records;
            dispatch({
                type:'GET_CATEGORIES',
                categories:json
            })
            console.log(json)
        }
        catch(error){
            console.log(error);
        }
    }
}
export const getProducts=()=>{
    return async dispatch =>{
        try{
            const response = await axios.get('http://localhost:8888/back/api/read_products.php')
            const json = await response.data;
            dispatch({
                type:'GET_PRODUCTS',
                payload:json
            })
            console.log(json)
        }
        catch(error){
            console.log(error);
        }
    }
}
export const getCategoryProducts=(id)=>{
    return async dispatch =>{
        const formData = new FormData();
        formData.append('id',id)
        try{
            const response = await axios.post('http://localhost:8888/back/api/read_category_products.php',formData)
            const json = await response.data;
            dispatch({
                type:'GET_CATEGORY_PRODUCTS',
                payload:json
            })
            console.log(json)
        }
        catch(error){
            dispatch({
                type:'GET_CATEGORY_PRODUCTS',
                payload:[]
            })
        }
    }
}

export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
});

export const dashPizzaToCart = (pizzaObj) => ({
    type: 'DASH_PIZZA_CART',
    payload: pizzaObj,
});

export const removePizzaToCart = (pizzaObj) => ({
    type: 'REMOVE_PIZZA_CART',
    payload: pizzaObj,
});

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