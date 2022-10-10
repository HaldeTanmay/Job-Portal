import React from 'react';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Error = () => {
    let style1 = {
        marginTop: "-3vh"
    }
    // let style1 = {
    //     position: "relative",
    //     width: "100%",
    //     border: "3px solid blue",
    // }
    return (

        <>
            <Navbar />
            <div class="containter-fluid main_header">
                <div class="row">
                    <div class="col-md-10 col-12 mx-auto">

                        <div class="row">

                            <div class="col-md-12 col-12 main_header_left align-items-center">

                                <figure class="errimg">
                                    <img src="https://raw.githubusercontent.com/HaldeTanmay/Job-Portal/varun/public/images/error.jpg" alt="Error" class="img-fluid" title="Error Image" style={style1} />
                                </figure>

                                <p class="errormsg">Error</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
