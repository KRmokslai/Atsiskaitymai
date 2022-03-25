

import React from "react";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark py-3">
        <div className="container">
            <a href="#" className="navbar-brand"><h3 className="fw-bold text-center text-light"> Bit jokes</h3></a>
            
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="http://jokes.com" className="nav-link">What you learn</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://javascript.info" className="nav-link">Questions</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://bit.lt/komanda/" className="nav-link">Instructors</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Header

