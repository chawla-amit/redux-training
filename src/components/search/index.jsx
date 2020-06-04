import React, { useState } from "react";

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
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
