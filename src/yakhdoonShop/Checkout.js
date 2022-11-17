import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.scss";
import Total from "./Total";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__right">
        <img
          src="https://connectio.io/wp-content/uploads/2016/08/section_2.jpg"
          alt="ads from a website"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">سبد خرید شما</h2>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__left">
        <Total />
      </div>
    </div>
  );
};

export default Checkout;
