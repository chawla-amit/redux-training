import React from "react";

/* 
 id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1"
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    */

const CharacterCard = ({ character }) => {
  const { name, status, species, gender, origin, location, image } = character;
  return (
    <div className="card bg-dark text-light">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h4 className="card-title text-truncate">{name}</h4>
        <h6
          className={`card-subtitle text-uppercase ${
            status === "Alive"
              ? "text-success"
              : `${status === "Dead" ? "text-danger" : "text-secondary"}`
          }`}
        >{`${status} - ${species}`}</h6>
        <p className="card-text text-info mt-1">{gender}</p>
      </div>
      <div className="card-body position-relative">
        {origin && (
          <div className="mb-2">
            <h6 className="mb-0">First seen:</h6>
            <p className="text-warning text-uppercase small mb-2">
              {origin.name}
            </p>
          </div>
        )}
        {location && (
          <div className="mb-2">
            <h6 className="mb-0">Last location:</h6>
            <p className="text-muted text-uppercase small mb-2">
              {location.name}
            </p>
          </div>
        )}
        <button
          type="button"
          className="btn btn-info btn-lg position-absolute rounded-circle"
          style={{
            bottom: "16px",
            right: "16px",
            fontSize: "20px",
            fontWeight: "bold"
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
