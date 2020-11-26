import React from 'react';
import { useStateValue } from '../../StateProvider';
import './product.css';

const Product = ({ id, title, price, rating, image }) => {
    const [{ basket }, dispatch] = useStateValue();
    
    
    const addProductHandler = async()=> {
       
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating:rating
            }
        })
        
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => <p>🌟</p>)}

                </div>
            </div>
            <img src={image} />
            <button onClick={addProductHandler}>Add to cart</button>
        </div>
    )
}

export default Product;