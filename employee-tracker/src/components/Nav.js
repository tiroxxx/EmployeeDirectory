import React from "react";
import SearchBox from "./SearchBox"

function Nav({ handleInputChange }) {
    return (
        <nav className="navbar narvbar-expand navbar-light bg-light">
            <div className="narbar-collapse row" id="navbarNav"/>
            <SearchBox handleInputChange={handleInputChange} />
        </nav>
    )
}

export default Nav;