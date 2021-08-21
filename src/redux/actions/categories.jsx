import axios from "axios";

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