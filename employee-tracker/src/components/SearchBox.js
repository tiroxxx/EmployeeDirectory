import React from "react";

function SearchBox({ handleSearchChange }) {
    return (
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    )
}

export default SearchBox;