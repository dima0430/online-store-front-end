import axios from 'axios';

export const authorization = async (auth) => {
    const response= await axios.post('http://localhost:8888/back/api/login.php',JSON.stringify(auth))
    console.log(response)
    return await response.data;
}
