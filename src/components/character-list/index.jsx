import React, { useEffect } from "react";
import { connect } from "react-redux";
import CharacterCard from "../character";
import { addToCart, fetchCharacters } from "../../redux/actions";

const CharacterList = ({ characters = [], addToCartItems, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        {characters.map(character => (
          <div className="col-lg-3 col-md-2 col-sm-12 p-3">
            <CharacterCard
              character={character}
              addToCartItems={addToCartItems}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  characters: state.characters.items
});

const mapDispatchToProps = dispatch => ({
  addToCartItems: item => dispatch(addToCart(item)),
  fetchData: () => dispatch(fetchCharacters())
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
