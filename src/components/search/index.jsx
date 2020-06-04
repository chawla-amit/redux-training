import React from "react";

const Search = props => {
  return (
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search..." />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
