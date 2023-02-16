import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,title,price,image,rating}) {
    const [{basket},dispatch] = useStateValue();
    
    //remove from basket
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt="" />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProdut_price"><small>$</small><strong>{price}</strong></p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map(()=>(
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>    
    </div>
  )
}

export default CheckoutProduct
