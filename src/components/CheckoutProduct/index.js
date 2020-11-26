import React from 'react';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';


const CheckoutProduct = ({ id, image, price, title, rating }) => {
    const [{basket},dispatch]=useStateValue();
    const removeProductHandler=()=>{
        
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })

    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout__Rating">
                    {
                        Array(rating).fill().map((_, i) =>
                            (<p>🌟</p>)
                        )
                    }

                </div>
                <button onClick={removeProductHandler}>Remove From Basket</button>
            </div>
        </div>
    )
}
export default CheckoutProduct;
