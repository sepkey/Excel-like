import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import "./Navbar.scss";
import { useAppContext } from "./context";

const Navbar = () => {
  const { amount } = useAppContext();

  return (
    <nav>
      <div className="center">
        <h3>My basic wishes!</h3>
        <div className="nav-container">
          <WorkOutlineIcon sx={{ fontSize: "2.2rem" }} />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
