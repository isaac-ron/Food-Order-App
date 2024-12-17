import React from "react";
import horizontallogo from "../assets/logos/horizontal-logo.png"
import './Header.css';

export default function Header() {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg d-flex navbar-light">
                <div className="container">
                    <a class="navbar-brand" href="#">
                            <img src={horizontallogo} width={80} height={80} className="d-inline-block align-top" />
                       
                    </a>
                    <button
                     className="navbar-toggler"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#toggleMobileMenu"
                     aria-controls="toggleMobileMenu"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                     >
                        <span className="navbar-toggler-icon"></span> 
                    </button>
                    <div className="collapse d-flex justify-content-between navbar-collapse" id="toggleMobileMenu">
                        <ul className="navbar-nav mx-auto align-items-center text-center">
                            <li>
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Food</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-icons" style={{display: "flex", alignItems: "center"}}>
                                <a className="nav-link" href="#">
                                    <i className="bi bi-basket2-fill"></i>
                                </a>
                                <a className="nav-link" href="#">
                                    <i className="bi bi-person"></i>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>

            </nav>
        </div>
        </>
    )
}
