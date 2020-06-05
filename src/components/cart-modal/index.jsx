import React from "react";
import { connect } from "react-redux";

const styles = {
  modalContainer: {
    position: "absolute",
    top: "50px",
    right: "50px",
    width: "375px",
    minHeight: "300px",
    maxHeight: "700px",
    overflowY: "auto"
  }
};

const CartItem = ({ item, removeItem }) => {
  const { image, name, status, species } = item;
  return (
    <div className="card bg-dark text-light mt-2 mb-2">
      <div class="row no-gutters">
        <div class="col-sm-4">
          <img src={image} className="card-img-top" alt={name} />
        </div>
        <div class="col-sm-6">
          <div className="card-body">
            <h4 className="card-title text-truncate">{name}</h4>
            <h6
              className={`card-subtitle text-uppercase ${
                status === "Alive"
                  ? "text-success"
                  : `${status === "Dead" ? "text-danger" : "text-secondary"}`
              }`}
            >{`${status} - ${species}`}</h6>
          </div>
        </div>
        <div className="col-sm-2 d-flex justify-content-center align-items-center">
          <button className="btn btn-small btn-danger rounded-circle">X</button>
        </div>
      </div>
    </div>
  );
};

const CartModal = ({ cartItems = [], showCart }) => {
  return showCart && cartItems.length ? (
    <div
      className="bg-light border-dark shadow-lg p-3 mb-5 bg-white rounded"
      style={styles.modalContainer}
    >
      {cartItems.map(item => (
        <CartItem item={item} />
      ))}
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  showCart: state.cart.showCart
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
