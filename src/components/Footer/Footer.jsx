import React from "react";
import People from "./People"
import Resources from "./Resources"
import Social from "./Social"


export default function Footer() {
    return (
        <footer id="footer">
            <People />
            <hr />
            <Resources />
            <Social />
            <p className="footer-end">© Copyright 2020 SAE IIT BHU</p>
        </footer>
    );
}

