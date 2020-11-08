import React from "react";
import SearchBox from "./SearchBox"

function Nav({ handleSearchChange }) {
    return (
        <nav className="navbar narvbar-expand navbar-light bg-light">
            <div className="narbar-collapse row" id="navbarNav"/>
            <SearchBox handleSearchChange={handleSearchChange} />
        </nav>
    )
}

export default Nav;