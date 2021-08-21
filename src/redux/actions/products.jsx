import axios from "axios";

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
export const addProductToLiked=(obj)=>({
    type:'ADD_TO_LIKED',
    payload:obj
}) 
export const removeProductFromLiked=(obj)=>({
    type:'REMOVE_FROM_LIKED',
    payload:obj
}) 