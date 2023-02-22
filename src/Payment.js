import React, { useState } from 'react'
import './Payment.css'
import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import { Link } from 'react-router-dom';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
function Payment() {
  const  [{ basket , user }, dispatch] = useStateValue();
  const stripe =useStripe();
  const elements =useElements();
  const [error,setError]=useState(null);
  const [disabled,setDisabled]=useState(true);
  const handleSubmit=e=>{
    //stripe code...
  }
  const handleChange=event=>{
    // listen for changes in cardElement
    // and display any errors
      setDisabled(event.empty);
      setError(event.error?event.error.message:"");
  }
  return (
    <div className='payment'>
      <div className="payment_container">
        <h1>Checkout(
          <Link to="/checkout">{basket?.length} items</Link>
          )</h1>
        {/* Payment--delivery Section */}
        <div className='payment_section'>
            <div className="payment_title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p>123 react lane</p>
              <p>Chopda,MH</p>
            </div>
        </div>
        {/* Payment--Review Items */}
        <div className='payment_section'>
            <div className="payment_title">
                <h3>Review Items and delivery</h3>
            </div>
            <div className="payment_items">
                {basket.map(items=>(
                  <CheckoutProduct
                      id={items.id}
                      title={items.title}
                      image={items.image}
                      price={items.price}
                      rating={items.rating}
                  />
                ))}
            </div>
        </div>
        {/* Payment--Payment Method */}
        <div className='payment_section'>
                  <div className="payment_title">
                    <h3>Payment Method</h3>
                  </div>
                  <div className="payment_details">
                    {/* stripe code */}
                        <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange}/>
                        </form>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
