import React from "react";
import "./Total.scss";
import CurrencyFormat from "react-currency-format";
import { getTotalBasket } from "./reducer";
import { useStateValue } from "./StateProvider";

const Total = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="total">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p
              style={{
                fontSize: "0.8rem",
              }}
            >
              جمع کل ({basket.length} عدد) : <strong>{value}$</strong>
            </p>
            <small
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "0.7rem",
              }}
            >
              <input type="checkbox" />
              <span>این سفارش جایزه دارد</span>
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalBasket(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>تکمیل فرایند پرداخت</button>
    </div>
  );
};

export default Total;
