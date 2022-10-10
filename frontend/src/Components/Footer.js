// // import React from 'react'

// // export const Footer = () => {
// //     let style1 = {
// //         position: "relative",
// //         width: "100%",
// //         border: "3px solid blue",
// //     }
// //     return (
// //         <div className='bg-dark text-light py-3' style={style1}>
// //             <p className='text-center'>
// //                 Copyright &copy; JobPortal.com
// //             </p>
// //         </div>
// //     )
// // }
// import React from 'react';
// import { Link } from 'react-router-dom';

// export const Footer = () => {
//     return (
//         <footer>
//             <section className="footer-Content">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3 col-md-3 col-xs-12">
//                             <div className="widget">
//                                 <div className="footer-logo">React job portal</div>
//                                 <div className="textwidget">
//                                     <p>React job portal with django backend</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-md-4 col-xs-12">
//                             <div className="widget">
//                                 <h3 className="block-title">Quick Links</h3>
//                                 <ul className="menu">
//                                     <li><Link to="/">About Us</Link></li>
//                                     <li><Link to="/">Support</Link></li>
//                                     <li><Link to="/">Contact</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-4 col-xs-12">
//                             <div className="widget">
//                                 {/* <ul className="mt-3 footer-social">
//                                     <li><Link className="facebook" to="#"><i className="lni-facebook-filled" /></Link></li>
//                                     <li><Link className="twitter" to="#"><i className="lni-twitter-filled" /></Link></li>
//                                     <li><Link className="linkedin" to="#"><i className="lni-linkedin-fill" /></Link></li>
//                                     <li><Link className="google-plus" to="#"><i className="lni-google-plus" /></Link></li>
//                                 </ul> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </footer>
//     );
// }

// export default Footer;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./css/footer.css"
import logo2 from "../Images/job.jpg";

export class Footer extends Component {
    render() {
        let style1 = {
            background: "#2d3246"
        }
        let style2 = {
            color: "#9918ff"
        }
        return (
            <>
                <footer class="section footer-classic context-dark bg-image" style={style1}>
                    <div class="container">
                        <div class="row row-30">
                            <div class="col-md-4 col-xl-5">
                                <div class="pr-xl-4">
                                    <Link className="nav-link" aria-current="page" to="/"><img src={logo2} className="nav-icon" id='foo1' alt="Job Portal" /></Link>
                                    <p id='foo2'>We are an award-winning creative agency, dedicated to the best result in web design,
                                        promotion, business consulting, and marketing.</p>

                                    <p id='foo2' class="rights"><span>©  </span><span
                                        class="copyright-year">2022</span><span> </span><span>Job Portal</span><span>. </span><span>All
                                            Rights Reserved.</span></p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <h5 style={style2}>Contacts</h5>
                                <dl class="contact-list">
                                    <dt>Address:</dt>
                                    <dd>Atharva College of Engineering Malad marve Road near Asimta Jyoti Bustop Charkop Naka Malad West 4000095</dd>
                                </dl>
                                <dl class="contact-list">
                                    <dt>email:</dt>
                                    <dd><Link to="/">jobportal@gmail.com</Link></dd>
                                </dl>
                                <dl class="contact-list">
                                    <dt>phones:</dt>
                                    <dd><Link to="/">https://jobportal.com</Link>
                                    </dd>
                                </dl>
                            </div>
                            <div class="col-md-4 col-xl-3">
                                <h5 style={style2}>Links</h5>
                                <ul class="nav-list">
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/register">Sign Up</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/">Home</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer