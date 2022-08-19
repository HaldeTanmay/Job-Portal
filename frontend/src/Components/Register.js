import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
// import login_bg from "../Images/login_bg.webp";
import "./css/Register.css"
// import Axios from "axios";


export const Register = () => {
    let style1 = {
        width: "20vw",
        position: "absolute",
        "marginLeft": "10px"
    }
    let style2 = {
        width: "8vw",
        "backgroundColor": "aqua",
        height: "5vh",
        "marginLeft": "33px"
    }
    let style3 = {
        width: "20vw",
        position: "absolute",
        "marginLeft": "14px"
    }
    let stylebtn = {
        width: "10vw",
        backgroundColor: "darkblue"
    }
    let display = {
        display: "inline-block"
    }
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", address: "", profession: "", password: "", cpassword: ""
    });

    // const [email, setEmail] = useState('');
    // const [error, setError] = useState('');
    // const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const checkEmail = (e) => {
    //     setEmail(e.target.value);
    //     if (regex.test(email === false)) {
    //         setError('Please Enter valid email address');
    //     }
    // }

    let name, value;
    const handleInputs = (e) => {
        // setEmail(e.target.vaue);
        // if (regex.test(email === false)) {
        //     setError('Please Enter valid email address');
        // }
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
        const { name, email, phone, address, profession, password, cpassword } = user;
        const res = await fetch('http://localhost:4000/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, address, profession, password, cpassword
            })
        });
        const data = await res.json();
        // const [alert, setAlert] = useState(null);
        // const showAlert = (message, type) => {
        //     setAlert({
        //         msg: message,
        //         type: type
        //     })
        //     setTimeout(() => {
        //         setAlert(null);
        //     }, 1500);
        // }
        if (res.status === 422 || !data) {
            // toast.warning('Danger');
            // showAlert("Email already exist", 'success');
            window.alert("Email already exist");
            console.log("Invalid Registration");
        }
        else if (res.status === 423 || !data) {
            // toast.warning('Danger')
            // showAlert("Password not matching", 'success');
            window.alert("Password not matching");
            console.log("Invalid Registration");
        }
        else if (res.status === 424 || !data) {

            window.alert("Enter valid email address");
            console.log("Invalid Registration");
        }
        else {
            window.alert(" Registration successful");
            console.log("Registration successful");
            navigate('/login');
        }

    }


    return (
        <>
            <section className="register">
                <div className='container mt-5' id="con1">
                    <div className="reg_content">
                        <div className="form">
                            {/* <figure>
                                <img className='center' src={login_bg} alt="background" style={style1} />
                            </figure> */}

                            <h2 className="form-title" style={display}>Sign In</h2>
                            <div className="col-auto" style={display}>
                                <button type="submit" className="btn btn-primary mb-3" onClick={() => navigate('/register')} style={stylebtn}>Job-Seeker</button>
                            </div>
                            <div className="col-auto" style={display}>
                                <button type="submit" className="btn btn-primary mb-3" onClick={() => navigate('/recruiter')} style={stylebtn}>Recruiter</button>
                            </div>
                            <form id="reg-form" className="reg-form" method='POST'>
                                <div className="form-group">
                                    <label htmlFor='name'>
                                        <i className="zmdi zmdi-account zmdi-hc-2x material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id='name' autoComplete='off' required={true}
                                        value={user.name} onChange={handleInputs}
                                        placeholder='Your Name' style={style3} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor='email'>
                                        <i className="zmdi zmdi-email zmdi-hc-2x material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id='email' autoComplete='off' required={true}
                                        value={user.email} onChange={handleInputs}
                                        placeholder='Your E-mail' style={style1} />
                                    {/* <p className='text-danger p-2 m-2'>{error}</p> */}
                                </div>

                                <div className="form-group">
                                    <label htmlFor='Phone'>
                                        <i className="zmdi zmdi-phone-in-talk zmdi-hc-2x material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone" id='phone' autoComplete='off' required={true}
                                        value={user.phone} onChange={handleInputs}
                                        placeholder='Your phone' style={style1} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor='address'>
                                        <i className="zmdi zmdi-home zmdi-hc-2x material-icons-name"></i>
                                    </label>
                                    <input type="address" name="address" id='address' autoComplete='off' required={true}
                                        value={user.address} onChange={handleInputs}
                                        placeholder='Your Address' style={style1} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='Profession'>
                                        <i className="zmdi zmdi-slideshow zmdi-hc-2x material-icons-name"></i>
                                    </label>
                                    <input type="text" name="profession" id='profession' autoComplete='off' required={true}
                                        value={user.profession} onChange={handleInputs}
                                        placeholder='Your Profession' style={style1} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='Password'>
                                        <i className="zmdi zmdi-lock zmdi-hc-2x material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id='password' autoComplete='off' required={true}
                                        value={user.password} onChange={handleInputs}
                                        placeholder='Your Password' style={style1} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='cPassword'>
                                        <i className="zmdi zmdi-lock zmdi-hc-2x material-icons-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id='cpassword' autoComplete='off' required={true}
                                        value={user.cpassword} onChange={handleInputs}
                                        placeholder='Confirm Your Password' style={style1} />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="register" id="register" className='form-submit' value="Register" onClick={PostData} style={style2} />
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}
