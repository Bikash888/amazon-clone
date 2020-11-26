import React, { useState,useEffect } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

export default function Subtotal() {
  const [{basket},dispatch]=useStateValue();
 
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Subtotal({basket.length} items):<strong>{value}</strong></p>
            <small className="subtotal__gift"> <input type="checkbox" />This order contains a gift</small>
          </>
        )}
        thousandSeparator={true}
        decimalScale={2}
        displayType="text"
        prefix="$"
        value={getBasketTotal(basket)}

      />
      <button>Procced to Checkout</button>
    </div>
  )
}
