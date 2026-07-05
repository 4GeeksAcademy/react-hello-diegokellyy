import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Jujutsu Kaisen
                </a>
                <div className="navbar-nav ms-auto">
                    <a className="nav-link active" href="#">
                        home
                    </a>
                    <a className="nav-link active" href="#">
                        About
                    </a>
                    <a className="nav-link active" href="#">
                        Services
                    </a>
                    <a className="nav-link active" href="#">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 