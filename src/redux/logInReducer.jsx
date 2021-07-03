const client={
    id:null,
    firstname:'',
    lastname:'',
    phone:'',
    email:'',
    login:false
}
export const logInReducer =(state=client,action)=>{
    switch(action.type){
        case 'LOG_IN':
            return {
                ...state,
                id:action.id,
                firstname:action.firstname,
                lastname:action.lastname,
                phone:action.phone,
                email:action.email,
                login:action.login
            }   
        default:return state;
    }
}