import React from 'react'
import logo1 from "../Images/1.jpg";
import logo2 from "../Images/2.jpg";
import logo3 from "../Images/3.jpg";
import { Link } from 'react-router-dom';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
// import logo1 from "../Images/1.jpg";
import "./css/style.css"

export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="containter-fluid main_header">
                <div className="row" id='row1'>
                    <div className="col-md-10 col-12 mx-auto">

                        <div className="row">



                            <div className="col-md-6 col-12 main_header_left">

                                <h1>Welcome to <span className="text_clr">Job Portal</span> Professional Community</h1>


                            </div>



                            <div className="col-md-6 col-12 main_header_right">

                                <div id="carouselExampleFade" className="carousel slide right">

                                    <div className="carousel-inner " id='ad1'>
                                        <img src={logo1} className="right_side_image" alt="..." />
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="containter-fluid main_header" id='ad2'>
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">

                        <div className="row">


                            <div className="col-md-6 col-12 main_header_right align-items-center">

                                <figure>
                                    <img src={logo2} alt="Job Search" className="img-fluid" />
                                </figure>

                            </div>

                            <div className="col-md-6 col-12 main_header_left" id='ad4'>


                                <h1>Find the <span className="text_clr">right job or internship</span> for you</h1>


                                <Link to="/login" className="Job_Search_Button"><button>Job Search</button></Link>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="containter-fluid main_header" id='ad3'>
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">

                        <div className="row">



                            <div className="col-md-6 col-12 main_header_left" id='ad4'>

                                <h1>Post your job for <span className="text_clr">millions </span> of people to see</h1>

                                <Link to="/login" className="Job_Search_Button"><button>Post a Job</button></Link>


                            </div>



                            <div className="col-md-6 col-12 main_header_right">

                                <div id="carouselExampleFade" className="carousel slide right">

                                    <div className="carousel-inner ">
                                        <img src={logo3} className="right_side_image" alt="..." />
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
