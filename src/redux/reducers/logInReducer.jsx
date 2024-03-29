const initialState={
    id:null,
    firstname:'',
    lastname:'',
    phone:'',
    email:'',
    login:false
}
export const logInReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'LOG_IN':
            const newUser={
            id:action.id,
            firstname:action.firstname,
            lastname:action.lastname,
            phone:action.phone,
            email:action.email,
            login:action.login}
            return {
                ...state,...newUser
            }   
        case 'LOG_OUT':
            return {
                ...state,
                id:null,
                firstname:'',
                lastname:'',
                phone:'',
                email:'',
                login:false
            }   
        default:return state;
    }
}