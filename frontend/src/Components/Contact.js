import React from 'react'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from 'react-router-dom';
import "./css/contact.css"

export const Contact = () => {
    return (
        <>
            <Navbar />

            <section className="ftco-section" >
                <div className="container">
                    <div className="row justify-content-center">
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-md-6" id='imgbag'>
                                        <div className="contact-wrap w-100 p-lg-5 p-4">
                                            <h3 className="mb-4" id="whch">Send us a message</h3>
                                            <div id="form-message-warning" className="mb-4"></div>
                                            <div className="mb-4" id="whch">
                                                We will try to cantact you soon!
                                            </div>
                                            <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea name="message" className="form-control" id="message" cols="30" rows="6" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="submit" value="Send Message" className="btn btn-primary" />
                                                            <div className="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-stretch" id='whs'>
                                        <div className="info-wrap w-100 p-lg-5 p-4 img">
                                            <h3>Contact us</h3>
                                            <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                            <div className="dbox w-100 d-flex align-items-start">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-map-marker"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-phone"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Phone:</span> <Link to="tel://1234567920">+ 1235 2355 98</Link></p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-paper-plane"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Email:</span> <Link to="mailto:info@yoursite.com">info@yoursite.com</Link></p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-globe"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Website</span> <Link to="#">yoursite.com</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <script src="js/jquery.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.validate.min.js"></script>
  <script src="js/main.js"></script> */}

            <Footer />
        </>
    )
}
