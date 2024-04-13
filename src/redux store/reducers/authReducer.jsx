const initialState={
    isRegistered:false
}

export const userAuthReducer =(state=initialState,action)=>{
    switch (action.type){
        case "IS_REGISTERED":{
            return {...state,isRegistered: action.payload}
        }
        default:{
            return {...state}
        }
    }
}
