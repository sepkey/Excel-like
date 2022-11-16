import React from "react";
import { useAppContext } from "./context";
import "./CartItem.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ id, img, title, price, amount }) => {
  // eslint-disable-next-line no-unused-vars
  const { remove, toggleAmount } = useAppContext();
  return (
    <article className="cart-item">
      <img src={img} alt={"title"} />
      <div className="description">
        <h4>{title}</h4>
        <h4>{price * 100}</h4>
        items: <span className="amount"> {amount}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <IconButton onClick={() => remove(id)}>
          <DeleteIcon sx={{ fontSize: "2rem", color: "#282828" }} />
        </IconButton>
        <IconButton onClick={() => toggleAmount(id, "dec")}>
          <RemoveCircleOutlineIcon
            sx={{ fontSize: "2rem", color: "#282828" }}
          />
        </IconButton>
        <IconButton onClick={() => toggleAmount(id, "inc")}>
          <AddCircleIcon sx={{ fontSize: "2rem", color: "#282828" }} />
        </IconButton>
      </div>
    </article>
  );
};

export default CartItem;
