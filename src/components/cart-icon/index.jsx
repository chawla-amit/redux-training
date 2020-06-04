import React from "react";
import cartIcon from "../../cart.png";

const CartIcon = props => {
  return (
    <div className="position-relative">
      <img src={cartIcon} alt="Mini Cart" width="50px" height="50px" />
      <span
        class="badge badge-info position-absolute text-lg rounded-circle"
        style={{ top: -4, right: -4, fontSize: "16px" }}
      >
        4
      </span>
    </div>
  );
};

export default CartIcon;
