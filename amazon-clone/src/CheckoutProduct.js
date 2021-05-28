import React from 'react'
import { useStateValue } from './StateProovider'
import { ACTION_TYPES } from './reducer'
import './CheckoutProduct.css'

function CheckoutProduct({
    id, title, img, price, rating
}) {
    const [, dispatch] = useStateValue()
    const removeProductFromBasket = () => {
        dispatch({
            type: ACTION_TYPES.REMOVE_FROM_BASKET,
            id
        })
    }
    return (
        <div className="checkoutProduct">
            <img alt="" className="checkoutProduct__img" src={img}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(_=> <p>⭐</p>)
                    }
                </div>
                <button onClick={removeProductFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
