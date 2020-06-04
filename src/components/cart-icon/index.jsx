import React from "react";
import cartIcon from "../../cart.png";

const CartIcon = ({ cartItemsCount = 0 }) => {
  return (
    <div className="position-relative">
      <img src={cartIcon} alt="Mini Cart" width="50px" height="50px" />
      {cartItemsCount ? (
        <span
          class="badge badge-info position-absolute text-lg rounded-circle"
          style={{ top: -4, right: -4, fontSize: "16px" }}
        >
          {cartItemsCount}
        </span>
      ) : null}
    </div>
  );
};

export default CartIcon;
