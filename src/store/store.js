import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import productsReducer from '../modules/Products/actions/productsReducer';
import cartReducer from '../modules/Cart/actions/cartReducer';

// Reducers
const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export default () =>
    createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunkMiddleware)
);