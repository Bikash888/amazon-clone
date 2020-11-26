import React, { useEffect, useState } from 'react';
import Header from './components/Header/index';
import Home from './components/Home/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider';


function App() {
  const [{ basket }, dispatch] = useStateValue();
  const [basketItem, setBasketItem] = useState({})
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("user is authenticated already")
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })

      }
    })

  }, [])
  let cart = [];
  useEffect(() => {
  //  console.log(localStorage.getItem('cart'))
    SaveProductToBasket();
  
  },[basket])
  
  const SaveProductToBasket = () => {
    const loadCart=JSON.parse(localStorage.getItem('cart'))
    if (basket.length != 0) {
      basket.map((item) => {
        cart.push(item)
      })
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  //  console.log(loadCart.length)

  }
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
