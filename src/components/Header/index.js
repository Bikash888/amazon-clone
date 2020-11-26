import React, { useEffect,useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css'
import { Link,useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import {auth} from '../../firebase';
const Header = () => {
    const [{ basket,user }, dispatch] = useStateValue();
    const [count,setCount]=useState(0)
    const emailName=user?.email.split('@')[0];
    
  const handleAuthentication=()=>{
      if(user){
       auth.signOut();
      }
  }
  let cart=[]
  useEffect(()=>{
      cart=JSON.parse(localStorage.getItem("cart"));
     setCount(cart.length)
    //  console.log("count----->>>>>>---->>>>",count)

  })
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" alt="amazon logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header_search">
                <input className="header_search_input" type="text" />
                <SearchIcon className="header_SearchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_option_one">Hello {user?emailName:'Guest'}</span>
                    <span className="header_option_two">{user?'Sign out':'Sign In'}</span>

                </div>
                </Link>

                <div className="header_option">
                    <span className="header_option_one">Returns</span>
                    <span className="header_option_two">& Orders</span>

                </div>

                <div className="header_option">
                    <span className="header_option_one">Your</span>
                    <span className="header_option_two">Prime</span>

                </div>
                <Link to="/checkout">
                    <div className="header_basket_option">
                        <ShoppingBasketIcon />
                        <span className="header_option_one header_basketCount">{count}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
