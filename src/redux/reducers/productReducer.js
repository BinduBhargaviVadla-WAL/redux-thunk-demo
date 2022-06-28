import { ActionTypes } from "../constants/action-types"
const initialState = {
    products:[{id:1,title:"phone",category:"electronic"}]
}
export const productReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        case ActionTypes.FETCH_PRODUCTS:
            return {...state,products:payload};
        default:
            return state
    }

}
export const selectedProductReducer = (state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,product:payload}
        case ActionTypes.FETCH_PRODUCT:
            return {...state,product:payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
        
}
