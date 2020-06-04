import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters, addCartItem } from "../../redux/actions";
import CharacterCard from "../character";

const CharacterList = ({ characters, getCharacters, addItemToCart }) => {
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {characters.map(character => (
          <div className="col-lg-3 col-md-2 col-sm-12 p-3">
            <CharacterCard
              character={character}
              addItemToCart={addItemToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.characters.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: () => dispatch(fetchCharacters()),
    addItemToCart: item => dispatch(addCartItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
