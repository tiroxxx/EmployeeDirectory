import React from "react";

function SearchBox({ handleInputChange }) {
    return (
        <input onChange={handleInputChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    )
}

export default SearchBox;