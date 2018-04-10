export const FETCH_CART_ID = 'FETCH_CART_ID';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const COMPONENT_RERENDER = 'COMPONENT_RERENDER';

export const storeCartId = (res) => {
    return {
        type: FETCH_CART_ID,
        result: res
    };
}

export const addCartItem = (res) => {
    return {
        type: ADD_CART_ITEM,
        result: res
    }
}

export const deleteCartItem = (res) => {
    return {
        type: DELETE_CART_ITEM,
        result: res
    }
}

export const componentReRender = (res) => {
    return {
        type: COMPONENT_RERENDER,
        result: res
    }
}

export const fetchCartId = (data) => {
    return dispatch => {
        fetch('http://magento2.inchoo4u.net/rest/V1/guest-carts', {
            method: 'POST'
          })
          .then(response => response.json()) 
          .then(data => dispatch(storeCartId(data)));
    }
}

export const getCartItems = (cartid,item,sku) => {
    return dispatch => {
        fetch('http://magento2.inchoo4u.net/rest/V1/guest-carts/' + cartid + '/items', {
            method: 'GET'
          })
          .then(response => response.json()) 
          .then(data => dispatch(addCartItem(data)));
    }
}

export const updateCartItems = (cartid,item,sku) => {
    return dispatch => {
        fetch('http://magento2.inchoo4u.net/rest/V1/guest-carts/' + cartid + '/items', {
            method: 'GET'
          })
          .then(response => response.json()) 
          .then(data => dispatch(deleteCartItem(data)));
    }
}

export const addItemToCart = (cartid,itemid,sku) => {
    return dispatch => {
          fetch('http://magento2.inchoo4u.net/rest/V1/guest-carts/' + cartid + '/items', {
            method: 'POST',
            body: JSON.stringify({cartItem: {quoteId: cartid,sku: sku, qty:1}}),
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
          .then(response => response.json()) 
          .then(data => dispatch(getCartItems(cartid,itemid,sku)));
    }
}

export const deleteItemFromCart = (cartid,itemid,sku) => {
    return dispatch => {
          fetch('http://magento2.inchoo4u.net/rest/V1/guest-carts/' + cartid + '/items/' + itemid, {
            method: 'DELETE'
          })
          .then(response => response.json()) 
          .then(data => dispatch(updateCartItems(cartid,itemid,sku)));
    }
}

export const renderLoading = () => {
    return dispatch => {
          componentReRender()
    }
}