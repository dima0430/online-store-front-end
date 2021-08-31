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
export const addProductToLiked=(obj,idProduct,idClient)=>
{
    return async dispatch =>{
        const formData = new FormData();
        formData.append('idProduct',idProduct)
        formData.append('idClient',idClient)
        try{
            const response = await axios.post('http://localhost:8888/back/api/add_product_to_liked.php',formData)
            const json = await response.data;
            dispatch
            ({
                type:'ADD_TO_LIKED',
                payload:obj
            })
            console.log(json)
        }
        catch(error){
            console.log(error)
        }
    }    
} 
export const removeProductFromLiked=(obj,idProduct,idClient)=>
{
    return async dispatch =>{
        const formData = new FormData();
        formData.append('idProduct',idProduct)
        formData.append('idClient',idClient)
        try{
            const response = await axios.post('http://localhost:8888/back/api/remove_product_from_liked.php',formData)
            const json = await response.data;//поправить
            dispatch
            ({
                type:'REMOVE_FROM_LIKED',
                payload:obj
            })
            console.log(json)
        }
        catch(error){
            console.log(error)
        }
    }
}

export const getLikedProducts=(idClient)=>{
    return async dispatch =>{
        const formData = new FormData();
        formData.append('idClient',idClient)
        try{
            const response = await axios.post('http://localhost:8888/back/api/read_liked_products.php',formData)
            const json = await response.data;
            dispatch({
                type:'GET_LIKED_PRODUCTS',
                payload:json
            })
            console.log(json)
        }
        catch(error){
            console.log(error);
        }
    }
}

export const clearLiked=()=>({
    type:'CLEAR_LIKED'
})