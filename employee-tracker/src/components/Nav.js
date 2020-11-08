import React from "react";
import SearchBox from "./SearchBox"

function Nav({ handleSearchChange }) {
    return (
        <nav className="navbar navbar-light bg-light">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </nav>
    )
}