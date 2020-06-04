import React from "react";
import withLoader from "./components/loader";
import CharacterList from "./components/character-list";
import Search from "./components/search";
import CartIcon from "./components/cart-icon";
import CartModal from "./components/cart-modal";
import Loader from "./components/loader";

function App() {
  return (
    <div className="container-fluid p-2 bg-light position-relative">
      <div className="row sticky-top bg-light d-flex align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1>Ricky Morty</h1>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-end">
          <Search />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center">
          <CartIcon />
        </div>
      </div>

      <CharacterList />
      <CartModal />
      <Loader />
    </div>
  );
}

export default App;
