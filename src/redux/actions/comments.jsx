import axios from "axios";

export const addComment=(comment,idClient,idProduct)=>{
    return async dispatch =>{
        const formData= new FormData();
        formData.append('clientText',comment)
        formData.append('idClient',idClient)
        formData.append('idProduct',idProduct)
        try{
            const response = await axios.post('http://localhost:8888/back/api/add_comment.php',formData)
            const json = await response.data;
            dispatch({
                type:'ADD_COMMENT',
                payload:json
            })
            console.log(json)
        }
        catch(error){
            console.log(error);
        }
    }
}
export const getComments=(id)=>{
    return async dispatch =>{
        const formData = new FormData();
        formData.append('id',id)
        try{
            const response = await axios.post('http://localhost:8888/back/api/read_comments.php',formData)
            const json = await response.data;
            dispatch({
                type:'GET_COMMENTS',
                payload:json
            })
            console.log(json)
        }
        catch{
            dispatch({
                type:'GET_COMMENTS',
                payload:[]
            })
        }
    }
}