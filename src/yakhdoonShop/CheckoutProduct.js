import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, img, rating, price }) => {
  const [, dispatch] = useStateValue();
  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <div className="checkoutProduct">
      <img src={img} className="checkoutProduct__img" alt="product small" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <span key={i + "d"}>⭐</span>;
            })}
        </div>
        <button onClick={removeFromBasket}>حذف از سبد خرید</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
