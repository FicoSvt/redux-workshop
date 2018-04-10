import React, { Component } from "react";
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import  { fetchCartId }  from '../Cart/actions/actions';

// Reusable components
import { Header } from '../../components';

// Modules
import { Home, Error404 } from './Views';

// Init history
const history = createHistory();

class Routing extends Component {

  componentDidMount() {
    this.props.fetchCartId();
  }

  render() {
    return (
      <Router history={history}>
        <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error404} />
        </Switch>
        </div>
      </Router>
    );
  }
};

const mapStateToProps = state => {
  return {
      cartId: state.cart.cartId
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchCartId: () => dispatch(fetchCartId())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Routing);