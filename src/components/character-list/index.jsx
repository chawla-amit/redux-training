import React from "react";
import CharacterCard from "../character";

const CharacterList = ({ characters }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {characters.map(character => (
          <div className="col-lg-3 col-md-2 col-sm-12 p-3">
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
