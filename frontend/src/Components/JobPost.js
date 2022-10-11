// import React from 'react'
// import { Footer } from "./Footer";
// import { Link } from 'react-router-dom';
// import "./css/Post.css"
// import { useNavigate } from "react-router-dom";

// export const JobPost = () => {
// const navigate = useNavigate();

// const navigateHome = () => {
//     navigate('/');
// };


//     return (
//         <>
//             <header class="hero-section">
//                 <nav class="nav-bar">
//                     <h2 class="logo">Job Portal</h2>
//                     <div class="nav-items">
//                         <Link className="nav-link" to="/profile">Profile</Link>
//                         <Link className="nav-link" to="/contact">Carrer</Link>
//                         <Link className="nav-link" to="/about">About Us</Link>
//                         <Link className="nav-link" to="/contact">Contact Us</Link>
//                         <button onClick={navigateHome}>Logout</button>
//                     </div>
//                 </nav>
//             </header>
//             <Footer />
//         </>
//     )
// }



// Post a Job 


// import { useHistory } from 'react-router-dom';
import React, { useState } from 'react'
// import login_bg from "../Images/login_bg.webp";
import "./css/Register.css"
// import "./css/style.css"
import logo4 from "../Images/9.jpg";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import Axios from "axios";


export const JobPost = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };
    let style1 = {
        width: "30vw",
        marginLeft: " 4vw"
    }
    let style2 = {
        width: "8vw",
        backgroundColor: "#63b3ff",
        height: "5vh"
    }
    let style3 = {
        "marginTop": "2vh",
        borderRadius: "25px"
    }
    let style4 = {
        fontSize: "35px"
    }
    // // const history = useHistory();

    const [user, setUser] = useState({
        cname: "", jp: "", rq: "", skill: "", rl: ""
    });


    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { cname, jp, rq, skill, rl } = user;
        const res = await fetch('http://localhost:4000/JobPost', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cname, jp, rq, skill, rl
            })
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Invalid ");
            console.log("Invalid ");
        }
        else {
            window.alert(" Posted");
            console.log("Posted");
            navigate("/dash");
            // history.pushState('/login');
        }

    }

    return (
        <>
            <header class="hero-section">
                <nav class="nav-bar">
                    <h2 class="logo">Job Portal</h2>
                    <div class="nav-items">
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/contact">Carrer</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                        <button onClick={navigateHome}>Logout</button>
                    </div>
                </nav>
            </header>
            <section className="section_login">
                <div className="container" style={style3}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black login_card" id='lc'>
                                <div className="card-body p-md-5 ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 register" style={style4}>Post Job</p>

                                            <form action="/register" method="post">

                                                {/* <!-- Name input --> */}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example3">Company Name</label>
                                                    <input type="text" id="validationCustom01" placeholder="Company Name" name="cname" className="form-control" value={user.cname} onChange={handleInputs} required />
                                                </div>

                                                {/* <!-- Email input --> */}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example3">Job Position</label>
                                                    <input type="name" placeholder="Position" id="form3Example3" name="jp" className="form-control" value={user.jp} onChange={handleInputs} required />
                                                </div>

                                                {/* <!-- Phone Number input --> */}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example3">Required Qualification</label>
                                                    <input type="name" placeholder="Qualification Details" id="form3Example3" name="rq" className="form-control" value={user.rq} onChange={handleInputs} required />
                                                </div>

                                                {/* <!-- Password input --> */}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example4">Required Skills</label>
                                                    <input type="name" placeholder="Skills" id="form3Example4" name="skill" className="form-control" value={user.skill} onChange={handleInputs} required />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example4">Resume Link</label>
                                                    <input type="name" placeholder="Enter Resume Link" id="form3Example4" name="rl" className="form-control" value={user.rl} onChange={handleInputs} required />
                                                </div>

                                                {/* <!-- Submit button --> */}

                                                <div className="login">
                                                    <button type="submit" className="loginbutton" style={style2} onClick={PostData}>
                                                        Post a Job
                                                    </button>

                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src={logo4}
                                                className="img-fluid register_image" alt="Sample" style={style1} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
