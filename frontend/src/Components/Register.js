// import { useHistory } from 'react-router-dom';
import React, { useState } from 'react'
// import login_bg from "../Images/login_bg.webp";
import "./css/Register.css"
// import "./css/style.css"
import logo4 from "../Images/4.jpg";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
// import Axios from "axios";


export const Register = () => {
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
        name: "", email: "", phone: "", password: "", cpassword: ""
    });

    const navigate = useNavigate();

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    // const PostData = () => {
    //     Axios.post("http://localhost:4000/createUser", { name, email, phone, address, profession, password, cpassword }).then((response) => {
    //         // alert("USER CREATED");
    //         setUser([...User, { name, email, phone, address, profession, password, cpassword, }])
    //     });
    // };


    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, password, cpassword } = user;
        const res = await fetch('http://localhost:4000/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword
            })
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else {
            window.alert(" Registration successful");
            console.log("Registration successful");
            navigate("/login");
            // history.pushState('/login');
        }

    }


    // return (
    //     <>
    //         <section className="register">
    //             <div className='container mt-5' id="con1">
    //                 <div className="reg_content">
    //                     <div className="form">
    //                         {/* <figure>
    //                             <img className='center' src={login_bg} alt="background" style={style1} />
    //                         </figure> */}

    //                         <h2 className="form-title">Sign In</h2>
    //                         <form id="reg-form" className="reg-form" method='POST'>
    //                             <div className="form-group">
    //                                 <label htmlFor='name'>
    //                                     <i class="zmdi zmdi-account zmdi-hc-2x material-icons-name"></i>
    //                                 </label>
    //                                 <input type="text" name="name" id='name' autoComplete='off' required="true"
    //                                     value={user.name} onChange={handleInputs}
    //                                     placeholder='Your Name' style={style3} />
    //                             </div>

    //                             <div className="form-group">
    //                                 <label htmlFor='email'>
    //                                     <i class="zmdi zmdi-email zmdi-hc-2x material-icons-name"></i>
    //                                 </label>
    //                                 <input type="email" name="email" id='email' autoComplete='off' required="true"
    //                                     value={user.email} onChange={handleInputs}
    //                                     placeholder='Your E-mail' style={style1} />
    //                             </div>

    //                             <div className="form-group">
    //                                 <label htmlFor='Phone'>
    //                                     <i class="zmdi zmdi-phone-in-talk zmdi-hc-2x material-icons-name"></i>
    //                                 </label>
    //                                 <input type="number" name="phone" id='phone' autoComplete='off' required="true"
    //                                     value={user.phone} onChange={handleInputs}
    //                                     placeholder='Your phone' style={style1} />
    //                             </div>

    //                             <div className="form-group">
    //                                 <label htmlFor='address'>
    //                                     <i class="zmdi zmdi-home zmdi-hc-2x material-icons-name"></i>
    //                                 </label>
    //                                 <input type="address" name="address" id='address' autoComplete='off' required="true"
    //                                     value={user.address} onChange={handleInputs}
    //                                     placeholder='Your Address' style={style1} />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor='Profession'>
    //                                     <i class="zmdi zmdi-slideshow zmdi-hc-2x material-icons-name"></i>
    //                                 </label>
    //                                 <input type="text" name="profession" id='profession' autoComplete='off' required="true"
    //                                     value={user.profession} onChange={handleInputs}
    //                                     placeholder='Your Profession' style={style1} />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor='Password'>
    //                                     <i class="zmdi zmdi-lock zmdi-hc-2x material-icons-name"></i>
    //                                 </label>
    //                                 <input type="password" name="password" id='password' autoComplete='off' required="true"
    //                                     value={user.password} onChange={handleInputs}
    //                                     placeholder='Your Password' style={style1} />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor='cPassword'>
    //                                     <i class="zmdi zmdi-lock zmdi-hc-2x material-icons-name"></i>
    //                                 </label>
    //                                 <input type="password" name="cpassword" id='cpassword' autoComplete='off' required="true"
    //                                     value={user.cpassword} onChange={handleInputs}
    //                                     placeholder='Confirm Your Password' style={style1} />
    //                             </div>
    //                             <div className="form-group form-button">
    //                                 <input type="submit" name="register" id="register" className='form-submit' value="Register" onClick={PostData} style={style2} />
    //                             </div>
    //                         </form>

    //                     </div>

    //                 </div>

    //             </div>
    //         </section>

    //     </>
    // )
    return (
        <>
            <Navbar />
            <section className="section_login">
                <div className="container" style={style3}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black login_card" id='lc'>
                                <div className="card-body p-md-5 ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 register" style={style4}>Registration Form</p>

                                            <form action="/register" method="post">

                                                {/* <!-- Name input --> */}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example3">Full Name</label>
                                                    <input type="text" id="validationCustom01" placeholder="Your Full Name" name="name" className="form-control" value={user.name} onChange={handleInputs} required />
                                                </div>

                                                {/* <!-- Email input --> */}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example3">Email address</label>
                                                    <input type="email" placeholder="Your Email Address" id="form3Example3" name="email" className="form-control" value={user.email} onChange={handleInputs} required />
                                                </div>

                                                {/* <!-- Phone Number input --> */}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example3">Phone Number</label>
                                                    <input type="number" placeholder="Your Phone Number" id="form3Example3" name="phone" className="form-control" value={user.phone} onChange={handleInputs} required />
                                                </div>

                                                {/* <!-- Password input --> */}
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example4">Password</label>
                                                    <input type="password" placeholder="Your Password" id="form3Example4" name="password" className="form-control" value={user.password} onChange={handleInputs} required />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example4">Confirm Password</label>
                                                    <input type="password" placeholder="Confirm Your Password" id="form3Example4" name="cpassword" className="form-control" value={user.cpassword} onChange={handleInputs} required />
                                                </div>

                                                {/* <!-- Submit button --> */}

                                                <div className="login">

                                                    <button type="submit" className="loginbutton" style={style2} onClick={PostData}>
                                                        Register
                                                    </button>

                                                </div>

                                                <p className="Signin">Already on Job Portal ?<a href="/login" className="Signin1">Sign In</a>
                                                </p>

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
