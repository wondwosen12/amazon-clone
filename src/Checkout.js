import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
   <div className="checkout">
    <div className="checkout__left">
    <img
          className="checkout__ad"
          src="https://ik.imagekit.io/AmazonImg12/Amazon_Images/7191qk-xnFL_YpV3ELW8R.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667417860016"
          alt=""
        />
         <h3>Hello</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
    </div>
    <div className="checkout__right">
        <Subtotal />
      </div>
   </div>
  );
}

export default Checkout;