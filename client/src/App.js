import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from 'react-router-dom'
import './App.css';
import Home from './screens/Home/Home'
import Products from './screens/Products/Products'
import ProductCreate from './screens/ProductCreate/ProductCreate'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import ProductEdit from './screens/ProductEdit/ProductEdit'
import SearchResults from './screens/SearchResults/SearchResults'
import { getProducts } from "./services/products";
// import { response } from "express";

function App() {
  // TODO:
  const setQuery = useState("")
  const [allProducts, setAllProducts] = useState([])
  const [queriedProducts, setQueriedProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setAllProducts(products)
      
    }
    fetchProducts()
  }, [])

  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    setQueriedProducts([]);
  }, [location])

  const handleChange = event => {
  
    if (event.target.value.length > 2) {
      const filteredItems = allProducts && allProducts.filter((product) => { 
        if (product.name.toLowerCase().includes(event.target.value.toLowerCase())) {
              return (
                product
              )
        }
      })
      setQueriedProducts(filteredItems)
    }
    
  }





 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home handleChange={handleChange} />
        </Route>
        <Route exact path="/products" component={Products} />
        <Route exact path="/add-product" component={ProductCreate} />
        <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/search-results">
          <SearchResults handleChange={handleChange} queriedProducts={queriedProducts} />
        </Route>
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
