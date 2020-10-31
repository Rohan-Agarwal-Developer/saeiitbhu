import React from "react";
import logo from "../images/saelogohd2.png";
import EventNoteIcon from '@material-ui/icons/EventNote';
import GroupIcon from '@material-ui/icons/Group';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const notifications = [
    {
        id: 1,
        date: "October 28, 2020",
        description: "SAE official quiz to be taken. Click here to register."
    },
    {
        id: 2,
        description: "The club is started interviews for the core members of session 2020-21",
        date: "October 8, 2020"
    },
    {
        id: 3,
        description: "SAE anounces its new secretaries for session 2020-21",
        date: "July 20, 2020"
    }

]

function NotificationItem(props) {
    return (
        <div className="notification-item">
            <a className="dropdown-item" href="#"><EventNoteIcon /> {props.date} | 
                <div style={{fontWeight:"600"}}>{props.description}</div> </a>
            <hr className="notification-separator" />
        </div>
    )
}


function Notifications() {
    return (
        <div className="dropdown ">
            <button className="btn btn-secondary dropdown-toggle .navbar-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Notifications
            </button>
            <div className="dropdown-menu dropdown-style dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <div className="">
                    {notifications.map(props =>
                        <NotificationItem
                            key={props.id}
                            description={props.description}
                            date={props.date}
                        />
                    )}
                </div>
            </div>
        </div>

    );
}


function Navbar() {
    return (
        <div className="header-navigator">
            <nav className="navbar navbar-expand-lg navbar-primary pad-mgn fixed-top">
                <img className="saelogo" src={logo} alt="saelogo" />
                <a className="navbar-brand" href="">
                    <h6>Society of Automotive Engineers - IIT BHU Varanasi</h6>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects <AccountTreeIcon style={{ fontSize: "18" }} /></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#events">Events <EmojiEventsIcon style={{ fontSize: "19" }} /></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact <GroupIcon style={{ fontSize: "20" }} /></a>
                        </li>
                        <li className="nav-item dropdown">
                            <Notifications />
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

{/* <nav className="navbar navbar-inverse navbar-dark bg-dark">
    <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
</nav> */}

export default Navbar;




