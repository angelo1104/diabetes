import React from "react";
import './Home.css';
import NavBar from "../NavBar/NavBar";

function Home() {

    return (
        <div className="home">
            <NavBar />

            <main>
                <div className="what" id={'what'}>
                    <h2>What?</h2>
                    <p>This is tel-dibet An Machine learning based application which will predict your diabetes score and will recommend you diets and will help you to track your values over a period of time. It is trained over a huge amount of data based over previous reports by many individuals. It represents data in an interactive chart to make you find trends between your values and your earlier values.</p>
                    <img src="https://img.medscapestatic.com/thumbnail_library/ts_110627_doctor_patient_interaction_300x225.png?interpolation=lanczos-none&resize=300:*" alt="A doctor with patient"/>
                    <p>Its job is to not replace Doctors but to help them track a patients history and trends with possible results making them take better and faster decisions for its patients. It uses the relevant data and finds trends in it to predict the values of diabetes and the corresponding diets to help the patient eat proper for their condition.</p>
                </div>
                <div className="why" id={'why'}>
                    <h2>Why?</h2>
                    <p>tel-dibet arose from the problem of diabetic patients not getting proper assistance. They need a way to track their past records and its comparison with their history and a risk percentage based on other people's metrics. This will help diabetic patients who don't get access to proper treatment or don't understand their condition and way to improve the condition.</p>
                    <img src="https://cdn.sciencebuddies.org/Files/7234/6/medicines-and-syringe.jpg" alt="A doctor with patient"/>
                    <p>tel-dibet do not prescribes drug but gives some lifestyle measures to improve the condition. It is because It is not a replacement bot for doctors but rather a assistant to save time of doctors by eliminating low risk people and prioritizing high risk people so that doctors can work more efficiently.</p>
                </div>
                <div className="how" id={'how'}>
                    <h2>How?</h2>
                    <p>tel-dibet is trained over thousands of data from people both with diabetes and without. It uses a polynomial regression model which predicts your value as accurately as possible. It has a easy to understand UI which is supported by most of the major browsers.</p>
                    <img src="https://thumbs.dreamstime.com/z/artificial-intelligence-icon-ai-isometric-cloud-computing-concept-data-mining-isometric-neural-network-machine-programming-vector-133423970.jpg" alt="A doctor with patient"/>
                    <p>It uses firebase as backend making it fast and always available. It stores all your previous data in the database and renders it into a easy to an understand chart with previous values all stacked over so we can better see the trend.</p>
                </div>
            </main>
        </div>
    )
}

export default Home;