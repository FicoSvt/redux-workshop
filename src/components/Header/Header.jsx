import React, { Component } from "react";
import { Navigation } from '../';
import Logo from '../../logo.svg';
import { connect } from 'react-redux';
import Minicart from '../../modules/Cart/Minicart';
import Loader from '../Loader/Loader';
import  { deleteItemFromCart }  from '../../modules/Cart/actions/actions';

class Header extends Component {

  state = {
    active: false
  }

  componentDidUpdate() {
    this.props.renderLoading()
  }

  toggleClassName = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render () {
    return (
      <header>
        <div className="ui-header">
            <div className="ui-container">
                <img src={Logo} className="ui-logo" alt="Logo" />
            </div>
        </div>
      <div className="ui-navigation">
        <div className="ui-container">
        <Navigation />
        <div className="ui-minicart">
          <span onClick={this.toggleClassName} className={this.state.active ? 'ui-list__action-trigger--active ui-list__action-trigger': 'ui-list__action-trigger'}>My Cart</span>
          <ul className={this.state.active ? 'ui-list ui-list__cart ui-list__cart--active': 'ui-list ui-list__cart'}>
            {
              this.props.isLoading === true ?
              <Loader /> : null
            }
            {
              this.props.cartItems.length ?
              this.props.cartItems.map(item => {
                return <Minicart 
                removeItemFromCart={(event) => this.props.removeItemFromCart(this.props.cartId,item.item_id,item.sku)} 
                key={item.item_id} 
                id={item.item_id} 
                name={item.name} 
                qty={item.qty} 
                price={item.price} />
              })
              : <li><p>There are no items in your shopping cart </p></li>
            }  
          </ul>
          <div onClick={this.toggleClassName} className={this.state.active ? 'ui-overlay ui-overlay--active': 'ui-overlay'}></div>
        </div>
        </div>
      </div>
    </header>
    )
  }
}

const mapStateToProps = state => {
  return {
      cartId: state.cart.cartId,
      cartItems: state.cart.cartItems,
      isLoading: state.cart.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
      removeItemFromCart: (cartid,itemid,sku) => dispatch(deleteItemFromCart(cartid,itemid,sku)),
      renderLoading: () => dispatch({ type: 'COMPONENT_RERENDER', payload: 'false' })
  }
}

console.log(this.props);

export default connect(mapStateToProps,mapDispatchToProps)(Header);