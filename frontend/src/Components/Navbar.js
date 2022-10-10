// import React from 'react'
// import logo1 from "../Images/logo_1.png";
// // import "./css/style.css"
// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//     let nav = {
//         border: "2px solid blue"
//     }
//     let style1 = {
//         height: "9vh",
//         width: "4vw"
//     }
//     let style2 = {
//         "marginRight": "5vw"
//     }
//     let style3 = {
//         "marginRight": "24px"
//     }
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-white bg-dark" style={nav}>
//                 <Link className="navbar-brand" to="#"><img className='logo1' src={logo1} alt="Logo" style={style1} /></Link>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav ml-auto" style={style2}>
//                         <li className="nav-item active" style={style3}>
//                             <Link className="nav-link" to="/"><h5>Home</h5> <span className="sr-only">(current)</span></Link>
//                         </li>
//                         <li className="nav-item" style={style3}>
//                             <Link className="nav-link" to="/register"><h5>Register</h5></Link>
//                         </li>
//                         <li className="nav-item" style={style3}>
//                             <Link className="nav-link" to="/login"><h5>Login</h5></Link>
//                         </li>
//                         <li className="nav-item" style={style3}>
//                             <Link className="nav-link" to="/about"><h5>About</h5></Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     )
// }

import React from 'react'
import "./css/style.css"
import logo2 from "../Images/job.jpg";
import { Link } from 'react-router-dom';


export const Navbar = () => {

    return (
        <div className="containter-fluid main_menu">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto" id='set'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">

                            <Link className="nav-link" aria-current="page" to="/"><img src={logo2} className="nav-icon" alt="Job Portal" /></Link>


                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto" id='nav-size'>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
