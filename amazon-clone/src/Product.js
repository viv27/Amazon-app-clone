import React from 'react'
import './Product.css'
import { useStateValue } from './StateProovider';
import { ACTION_TYPES } from './reducer';

function Product({
    id, title, img, price, rating
}) {
    const [, dispatch] = useStateValue()
    const handleAdd = () => {
        dispatch({
            type: ACTION_TYPES.AdD_TO_BASKET,
            item: {
                id, title, img, price, rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(_=> <p>⭐</p>)
                    }
                </div>
            </div>
            <img src={img} alt={title}/>
            <button onClick={handleAdd}>Add to basket</button>
        </div>
    )
}

export default Product
