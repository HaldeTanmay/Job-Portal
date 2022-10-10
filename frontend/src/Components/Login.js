import React, { useState } from 'react'
import logo5 from "../Images/5.jpg";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    let style1 = {
        backgroundColor: "#eee"
    }
    let style2 = {
        "border-radius": "25px"
    }
    let style3 = {
        margin: "4vh"
    }
    let style4 = {
        marginTop: "7vh"
    }
    // const [user, setUser] = useState({
    //     email: "", password: ""
    // });

    // let name, value;
    // const handleInputs = (e) => {
    //     console.log(e);
    //     name = e.target.name;
    //     value = e.target.value;

    //     setUser({ ...user, [name]: value })
    // }
    // const navigate = useNavigate();
    // const PostData = async (e) => {
    //     e.preventDefault();
    //     const { email, password } = user;
    //     const res = await fetch('http://localhost:4000/login', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             email, password
    //         })
    //     });
    //     const data = await res.json();
    //     if (res.status === 400 || !data) {
    //         window.alert("Invalid  Credentials");
    //         console.log("Invalid  Credentials");
    //     }
    //     else {
    //         window.alert("Login successful");
    //         console.log("Login successful");
    //         navigate("/dashboard");
    //         // history.pushState('/login');
    //     }

    // }
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid  Credentials");
            console.log("Invalid  Credentials");
        }
        else {
            window.alert("Login successful");
            console.log("Login successful");
            navigate("/dash");
        }
    }

    return (
        <>
            <Navbar />
            <section class="section_login" style={style1}>
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-lg-12 col-xl-11" style={style3}>
                            <div class="card text-black login_card" style={style2}>
                                <div class="card-body p-md-5 ">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" style={style4}>

                                            <img src={logo5}
                                                class="img-fluid login_image" alt="Sample" />

                                        </div>

                                        <div class="col-md-10 col-lg-6 col-xl-7 order-1 order-lg-2">

                                            <div class="loginlabel">

                                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 register login_label">Login Form</p>

                                            </div>

                                            <form action="/login" method="post">

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example3">Email address</label>
                                                    <input type="email" placeholder="Your Email Address" id="form3Example3" name="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                                </div>


                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example4">Password</label>
                                                    <input type="password" placeholder="Your Password" id="form3Example4" name="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                </div>



                                                <div class="login">

                                                    <button type="submit" class="loginbutton " onClick={loginUser}>
                                                        Login
                                                    </button>

                                                </div>

                                                <p class="Signin">New to Job Portal ?<a href="/register" class="Signin1">Join Now</a>
                                                </p>

                                            </form>

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
