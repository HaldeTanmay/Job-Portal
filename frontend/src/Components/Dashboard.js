import React from 'react'
// import logo1 from "../Images/logo1.png";
// import logo3 from "../Images/logo3.png";
import logo2 from "../Images/icon-briefcase.png";
import "./css/dashboard.css"
import { Link } from 'react-router-dom';
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    };

    const navigatePost = () => {
        navigate('/JobPost');
    };
    return (
        <>
            <header class="hero-section">
                <nav class="nav-bar">
                    <h2 class="logo">JJO</h2>
                    <div class="nav-items">
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/contact">Carrer</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                        <Link className="nav-link" to="/contact">Contact Us</Link>

                        <button onClick={navigateHome}>Logout</button>
                    </div>
                </nav>
                <div class="hero-text-section">
                    <h1>Juniors Make IT Work</h1>
                    <p>Hire and Invest in highly skilled juniors now!</p>
                    <button onClick={navigatePost}>Post a Offer</button>
                </div>
            </header>
            <div class="job-offers">
                <h1>Newest Job Offers </h1>
                <Link className="nav-link" to="/job">See All Offers</Link>
            </div>
            <section class="jobs-section">
                <div class="job">
                    <div class="job-title">
                        <h2>Reactjs Developer</h2>
                        <p>1 hours ago</p>
                    </div>
                    <div class="job-location">
                        <h4>PickSaaS</h4>
                        <p>London,UK</p>
                    </div>
                    <div class="job-description">
                        <p
                        >I am looking for a Java Developer.<br />
                            Project for public sector location.NewYork<br />
                            (during the pandemic remote work)<br />
                            $ upto PLN 550 net / MD B2B</p>
                    </div>
                </div>
                <div class="job">
                    <div class="job-title">
                        <h2>Junior Java Developer</h2>
                        <p>2 hours ago</p>
                    </div>
                    <div class="job-location">
                        <h4>PickSaaS</h4>
                        <p>NewYork,USA</p>
                    </div>
                    <div class="job-description">
                        <p
                        >I am looking for a Java Developer.<br />
                            Project for public sector location.NewYork<br />
                            (during the pandemic remote work)<br />
                            $ upto PLN 550 net / MD B2B</p>
                    </div>
                </div>
                <div class="job">
                    <div class="job-title">
                        <h2>Javascript Developer</h2>
                        <p>5 hours ago</p>
                    </div>
                    <div class="job-location">
                        <h4>PickSaaS</h4>
                        <p>NewYork,USA</p>
                    </div>
                    <div class="job-description">
                        <p
                        >I am looking for a Java Developer.<br />
                            Project for public sector location.NewYork<br />
                            (during the pandemic remote work)<br />
                            $ upto PLN 550 net / MD B2B</p>
                    </div>
                </div>
            </section>
            <section class="feature-companies">
                <h1>Featured Companies</h1>
                <div class="companies-container">
                    <div class="company">
                        <div class="icon-container">
                            <img src={logo2} alt="" />
                        </div>
                        <h2>GrandParade</h2>
                    </div>
                    <div class="company">
                        <div class="icon-container">
                            <img src={logo2} alt="" />
                        </div>
                        <h2>GrandParade</h2>
                    </div>
                    <div class="company">
                        <div class="icon-container">
                            <img src={logo2} alt="" />
                        </div>
                        <h2>GrandParade</h2>
                    </div>
                    <div class="company">
                        <div class="icon-container">
                            <img src={logo2} alt="" />
                        </div>
                        <h2>GrandParade</h2>
                    </div>
                    <div class="company">
                        <div class="icon-container">
                            <img src={logo2} alt="" />
                        </div>
                        <h2>GrandParade</h2>
                    </div>
                    <div class="company">
                        <div class="icon-container">
                            <img src={logo2} alt="" />
                        </div>
                        <h2>GrandParade</h2>
                    </div>
                    <div class="company">
                        <div class="icon-container">
                            <img src={logo2} alt="" />
                        </div>
                        <h2>GrandParade</h2>
                    </div>
                    <div class="company">
                        <div class="icon-container">
                            <img src={logo2} alt="" />
                        </div>
                        <h2>GrandParade</h2>
                    </div>
                    <div class="company">
                        <div class="icon-container">
                            <img src={logo2} alt="" />
                        </div>
                        <h2>GrandParade</h2>
                    </div>
                </div>
            </section>
            <section class="clt-section">
                <div class="clt-text-section">
                    <h1>Recieve New Job Offers.</h1>
                    <p
                    >Want to know as soon as a new job offer is posted on our<br />
                        website?Subscribe to our weekly job offer digest.</p>
                    <div class="email-container">
                        <input type="email" placeholder="Enter email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>
            {/* <footer class="footer-container">
                <Link className="nav-link" to="/register">Job offers</Link>
                <Link className="nav-link" to="/register">Companies</Link>
                <Link className="nav-link" to="/register">About us</Link>
                <Link className="nav-link" to="/register">Blog</Link>
            </footer> */}
            <Footer />
        </>
    )
}
