import * as actionTypes from './actions'

const initialState = {
    cartId: null,
    cartItems: [],
    isLoading: false
}

const cartReducer = (state = initialState, action) => {
    if(action.type === actionTypes.FETCH_CART_ID) {
        return {
            ...state,
            cartId: action.result    
        }
    }
    if(action.type === actionTypes.ADD_CART_ITEM) {
        return {
            ...state,
            cartItems: action.result,
            isLoading: true    
        }
    }
    if(action.type === actionTypes.DELETE_CART_ITEM) {
        return {
            ...state,
            cartItems: action.result,
            isLoading: true    
        }
    }
    if(action.type === actionTypes.COMPONENT_RERENDER) {
        return {
            ...state,
            isLoading: false    
        }
    }
    return state;
}

export default cartReducer;