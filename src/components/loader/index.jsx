import React from "react";
import { connect } from "react-redux";

const styles = {
  loader: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0 ,0 ,0, 0.5)",
    zIndex: 10000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const Loader = ({ isLoading }) => {
  return isLoading ? <div style={styles.loader}>Loading...</div> : null;
};

const mapStateToProps = state => ({
  isLoading: state.loader.show
});

export default connect(mapStateToProps)(Loader);
