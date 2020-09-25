import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './screens/Home/Home'
import Products from './screens/Products/Products'
import ProductCreate from './screens/ProductCreate/ProductCreate'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import ProductEdit from './screens/ProductEdit/ProductEdit'
import SearchResults from './screens/SearchResults/SearchResults'

function App() {
  // TODO:
  // allProducts state
  // queriedProducts state
  // onChange populate SearchResults
  // pass results of queriedProducts as prop
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/add-product" component={ProductCreate} />
        <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/search-results" component={SearchResults} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
