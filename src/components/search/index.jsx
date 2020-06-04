import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../../redux/actions";

const Search = ({ search }) => {
  const [value, setValue] = useState("");

  const handleOnChange = event => {
    setValue(event.target.value);
  };

  return (
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Search..."
        value={value}
        onChange={handleOnChange}
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => search(value)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  search: searchTerm => dispatch(fetchCharacters(searchTerm))
});

export default connect(null, mapDispatchToProps)(Search);
