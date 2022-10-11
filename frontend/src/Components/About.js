import React from 'react'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import logo4 from "../Images/10.png";
// import "./css/about.css"

export const About = () => {
    let style1 = {
        color: "white"
    }
    return (
        <>
            <Navbar />
            <br />
            <div class="About-us">
                <img className="about_img" src={logo4} />
                <div>
                </div>
                <p> Shine.com connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job
                    openings through an advanced 2-way matching technology. While most job portals only focus on getting
                    candidates the next job, Shine focuses on the entire career growth of candidates.

                    Shine works closely to bridge the gap between talent & opportunities and offers end-to-end recruitment
                    solutions. Shine Job Fair brings candidates and top employers under one roof.
                </p>

                <h3>Our Mission</h3>
                <p> The mission of Job Portal is simple: connect the world’s professionals to make them more productive and
                    successful.</p>

                <h3>Our Vision </h3>
                <p>Every day,to connect millions of people to new opportunities.
                </p>
                <h5> Follow Us On </h5>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-linkedin"></a>
            </div>
            <Footer />
        </>
    )
}
