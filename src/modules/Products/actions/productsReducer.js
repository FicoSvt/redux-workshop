import * as actionTypes from './actions'

const initialState = {
    listItems: [],
    currentPage: 1,
    totalCount: 1,
    pageSize: 10,
    basePrice: 0
}

const productsReducer = (state = initialState, action) => {
    if(action.type === actionTypes.FETCH_ITEMS) {
        return {
            ...state,
            listItems: action.result.items    
        }
    }
    return state;
}

export default productsReducer;