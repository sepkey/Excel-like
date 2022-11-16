import React from "react";
import CartItem from "./CartItem";
import { useAppContext } from "./context";
import "./CartContainer.scss";

const CartContainer = () => {
  const { cart, total, clearCart } = useAppContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your whishlist</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your whishlist</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>{total * 100} </span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
