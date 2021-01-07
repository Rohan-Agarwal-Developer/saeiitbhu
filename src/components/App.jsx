import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Events from "./Events";
import Footer from "./Footer/Footer";
import Title from "./Title";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Title} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/events" component={Events} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


{/* <Router>
        <div>
            <Navbar />
            <Route path="/title" componebts={Title}/>
            <Title />
            <hr />
            <Projects />
            <hr />
            <Events />
            <Footer />
        </div>
        </Router> */}