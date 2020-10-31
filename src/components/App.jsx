import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Events from "./Events";
import Footer from "./Footer/Footer";
import Title from "./Title";

function App() {
    return (
        <div>

            <Navbar />
            <Title />
            <hr />
            <Projects />
            <hr />
            <Events />
            <Footer />
        </div>
    );
}

export default App;
