import React from 'react'
import { useStateValue } from './StateProovider'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
    const [ { basket } ] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img alt="" className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
                {/* // Shopping Cart */}
                {basket.length ? <h2 className="checkout__title">Shopping Cart</h2> : null }
                {
                    basket.length ? (
                        basket.map(item => <CheckoutProduct {...item}/>)
                    ) : (
                    <div>
                        <h2>Your Shopping Cart is empty.</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                    </div>
                    )
                }
            </div>
            <div className="checkout__right">
                {basket.length ? <Subtotal /> : null}
            </div>        
        </div>
    )
}

export default Checkout
