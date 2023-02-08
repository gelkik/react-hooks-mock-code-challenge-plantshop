import React, { useState } from "react";

function Search({handleSearch}) {

  const [searchQ,setSearchQ]=useState('');

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQ}
        onChange={(e)=>handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
