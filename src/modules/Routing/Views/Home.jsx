import React, { Component } from "react";
import { Products } from '../../';
import { connect } from 'react-redux';
import  { fetchItems }  from '../../Products/actions/actions';
import  { addItemToCart }  from '../../Cart/actions/actions';
const imgPath = "http://magento2.inchoo4u.net/pub/media/catalog/product";

class Home extends Component {


    componentDidMount() {
        this.props.fetchProducts();
        
    }

    mapProductImages = (id) => {
        let matchItem = this.props.listItems.find((item => item.id === id));
        let matchAttrCode = matchItem.custom_attributes.find((item => item.attribute_code === 'small_image'));    
        return imgPath + matchAttrCode.value;
      }

    render() {
        return (
            
            <div className="ui-main">
                <div className="ui-container">
                    <h1 className="ui-title ui-title--margin ui-title--border">Our Products</h1>
                    <ul className="ui-list ui-list__products">
                        {this.props.listItems.map((item) => {
                            return <Products 
                            key={item.id} 
                            name={item.name}
                            sku={item.sku}
                            image={this.mapProductImages(item.id)} 
                            price={item.price} 
                            dataid={item.id}
                            addItemToCart={(event) => this.props.addItemToCart(this.props.cartId,item.id,item.sku)} 
                            />
                        })}
                    </ul>
                </div>
            </div>
          );
    }
};

const mapStateToProps = state => {
    return {
        listItems: state.products.listItems,
        currentPage: state.products.currentPage,
        totalCount: state.products.totalCount,
        pageSize: state.products.pageSize,
        basePrice: state.products.basePrice,
        cartId: state.cart.cartId,
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchItems()),
        addItemToCart: (cartid,itemid,sku) => dispatch(addItemToCart(cartid,itemid,sku))
    }
}

console.log(this.props);

export default connect(mapStateToProps,mapDispatchToProps)(Home);