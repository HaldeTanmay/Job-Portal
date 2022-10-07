import React from 'react'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const About = () => {
    let style1 = {
        color: "white"
    }
    return (
        <>
            <Navbar />
            <div className="about-section">
                <h1 style={style1}>About Us </h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <div className="mission">
                <h2>Our Mission</h2>
                <p> ye mission badmai likhte hai abhi project continue karte hai </p>
            </div>
            <div className="vision">
                <h2>Our Vision</h2>
                <p>ye bhi last mai hi</p>
            </div>
            <Footer />
        </>
    )
}
