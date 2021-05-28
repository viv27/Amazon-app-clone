import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProovider';
import { getTotalPrice } from './reducer'
import './Subtotal.css'

function Subtotal() {
    const [{basket}] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        <button>Proceed to checkout</button>
                    </>
                )}
                value={getTotalPrice(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix="₹"
                decimalScale={2}
            />
            
        </div>
    )
}
            // <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />

export default Subtotal
