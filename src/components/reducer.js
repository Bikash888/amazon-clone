import React,{useEffect} from 'react';
export const initialState = {
    basket: JSON.parse(localStorage.getItem('cart')) || [],
    user: null,
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => parseFloat(amount + item.price), 0)
 
const reducer = (state, action) => {

  
    switch (action.type) {
        case "ADD_TO_BASKET":    
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            console.log("index==",index)
            if (index >=0) {
                
                newBasket.splice(index, 1)
            } else {
                let cart=[]
                localStorage.setItem('cart',JSON.stringify([]))
                console.warn("Product " + action.id + " not found")
            }
            return {
                ...state,
                basket: newBasket,
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}
export default reducer;