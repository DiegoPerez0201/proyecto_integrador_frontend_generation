import React from "react";
import 'bootstrap/dist/js/bootstrap.js';
import ContactUs from "../components/ContactUs";
import SocialMedia from "../components/SocialMedia";
import { BannerHomePage } from "../components/Banner";
import Slide from "../components/Slide";

const HomePage = () => {
    return (
        <div className="flex-body">
            <div>
                <BannerHomePage/>
            </div>
            <div>
                <Slide/>
            </div>
            <div className="container text-center d-flex flex-column align-items-center mx-auto mt-20" style={{ marginTop: 120, marginBottom: 40 }}>
                <h1><i>"Scroom es la mejor plataforma para cultivar un ambiente laboral positivo"</i></h1>
            </div>
            <div className="container">
                <div className="row">
                    <ContactUs/>
                    <SocialMedia/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;