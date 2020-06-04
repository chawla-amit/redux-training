import React from "react";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/actions";
import cartIcon from "../../cart.png";

const CartIcon = ({ cartItemsCount, toggle }) => {
  return (
    <div className="position-relative" onClick={toggle}>
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

const mapStateToProps = state => ({
  cartItemsCount: state.cart.count
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
