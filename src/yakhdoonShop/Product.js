import React, { useState } from "react";
import "./Product.scss";
import { useStateValue } from "./StateProvider";

const Product = ({ id, rating, title, price, img }) => {
  const [, dispatch] = useStateValue();
  const [unique, setUnique] = useState(true);

  function addToBasket() {
    if (unique) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: { id, rating, title, price, img, shutters: [] },
      });
      setUnique(false);
    }
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">{price}$</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>

      <img src={img} alt="ice" />
      <button onClick={addToBasket}>به سبد اضافه کن</button>
    </div>
  );
};

export default Product;
