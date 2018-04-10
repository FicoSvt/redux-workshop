import React from 'react';

const Products = (props) => {
    return (
        <li className="ui-box ui-list__item ui-list__products__item">
            <span className="ui-list__inner-item ui-list__inner-item--products ui-list__name list-item-name">{props.name}</span>
            <img className="list-item-image" src={props.image} alt={props.name}/>
            <span className="ui-list__inner-item ui-list__inner-item--products ui-list__price list-item-price">Price: <span className="price">{props.currency}</span></span>
            <button onClick={props.addItemToCart} className="ui-button ui-button--cta" dataid={props.dataid}>Add to Cart</button>
        </li>
    )
}

export default Products;