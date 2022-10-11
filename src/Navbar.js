import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="navbar-container">
            <FontAwesomeIcon icon={faEarthAmericas} size="xl"/>
            <p>my travel journal.</p>
        </div>
    )
}

export default Navbar