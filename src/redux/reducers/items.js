import axios from "axios";
const GET_ITEMS = 'GET_ITEMS';
const ADD_CART = 'ADD_CART';
const DELETE_CART = 'DELETE_CART';
const GET_PRODUCT = 'GET_PRODUCT';
const initState = {
items: [],
cart: [],
product: {}
};
export default (state = initState, action) => {
    switch (action.type) {
        case GET_ITEMS: {
            return {
                ...state,
                items: action.items
            }
        }
        case ADD_CART: {
           const idx = state.cart.findIndex((item)=>{
            return item.id === action.obj.id
           });
           if(idx === -1){
               return {
                ...state,
                cart: [{...action.obj, count: 1},...state.cart]
               }
           }else{
            state.cart[idx].count++;
            return{
                 ...state,  
            }
           }
        }
        case DELETE_CART: {
            return{
                ...state,
                cart:state.cart.filter((item)=>{
                    return item.id !== action.obj.id
                })
            }
        }
        case GET_PRODUCT: {
            return{
                ...state,
                product: action.product
            }
        }
        default:
            return state
    }
};
export const getItems = ()=>{
    return (dispatch)=>{
       axios.get('http://localhost:7070/')
       .then(({data})=> dispatch({type: GET_ITEMS, items: data}))
    }
};
export const addCart = (obj)=>{
    return (dispatch)=>{
        return dispatch({type: ADD_CART, obj})
    }
};
export const deleteCart = (obj)=>{
    return (dispatch)=>{
        return dispatch({type: DELETE_CART, obj})
    }
};
export const getProduct = (idx)=>{
    return (dispatch)=>{
        axios.get('http://localhost:7070/')
        .then(({data})=>{
    return dispatch({type: GET_PRODUCT, product: data[idx]})
        })
    }
};




