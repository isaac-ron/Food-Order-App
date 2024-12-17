import React from "react";
import './Footer.css';
import wordmark from "../assets/logos/wordmark-logo.png"

export default function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="info-row">
                <div className="about-us">
                    <h5>About Us</h5>
                    <p>We are a young company ready to take efficiency to the next level </p>
                    <img src={wordmark} className="wordmark-logo" />
                </div>
                <div className="contact">
                    <h5>Contact Us</h5>
                    <p>Address: JASNS44, Park Street, NJ</p>
                    <p>Phone: 07982382384</p>
                    <p>info@deliverio.com</p>
                </div>
                <div className="socials">
                    <h5>Socials</h5>
                    <i class="bi bi-twitter-x">Twitter/X</i>
                    <i class="bi bi-instagram">Instagram</i>
                    <i class="bi bi-tiktok">TikTok</i>
                </div>
                <div className="quick-links">
                    <h5>Important Links</h5>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Support</p>
                    <p>My Account</p>
                </div>
            </div>
            <div className="attribution-row">
                <p>Copyright &copy; 2024 Deliver.io Ltd &middot; All Rights Reserved. </p>
            </div>

        </footer>
        </>
    )
}