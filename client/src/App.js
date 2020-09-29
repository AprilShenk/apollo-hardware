import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
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
  const [query, setQuery] = useState("")
  const [allProducts, setAllProducts] = useState([])
  const [queriedProducts, setQueriedProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setAllProducts(products)
      console.log(products)
    }
    fetchProducts()
  }, [])

  const handleChange = event => {
   
    if (event.target.value.length > 2) {
      const filteredItems = allProducts.filter((product) => { 
        if (allProducts.product.name.toLowerCase().includes(event.target.value.toLowerCase())) {
              return (
                product
               )
             }
      })
    }
    setQueriedProducts(filteredItems)
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
        <Route exact path="/products/search-results" component={SearchResults} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
