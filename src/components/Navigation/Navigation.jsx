import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    
        <ul className="ui-navigation__list">
            <li className="ui-navigation__list-item">
                <NavLink className="ui-navigation__list-link" activeClassName="ui-navigation__list-link--active" exact to="/">Our Products</NavLink>
            </li>
        </ul>
         
);

export default Navigation;