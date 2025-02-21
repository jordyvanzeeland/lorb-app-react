import React, { useEffect, useState } from "react";

const Header = (props) => {
    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#"><div className="icon">L</div>Library of Readed Books</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><i className="fa-solid fa-book-open"></i> Boeken</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-bars-progress"></i> Challenges</a>
                            </li>
                        </ul>
                    </div>
                    <button name="logout" id="logout"><i className="fa-solid fa-right-from-bracket"></i> Uitloggen</button>
                </div>
            </nav>
        </div>
    )
}

export default Header;