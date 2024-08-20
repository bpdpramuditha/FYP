import React from "react";
import Button from "../layouts/Button";

const Home = () => {
    return(
        <div className="hero-section">
            <div className="content-container space-y-5">
                <h1 className="heading">
                    Revolutionizing Medical Report Analysis
                </h1>
                <p>
                    Experience the seamless reading of your medical reports with MedRead
                </p>

                <Button title="Upload File"/>

            </div>
        </div>

    );
};

export default Home;