import React, {useEffect, useState} from "react";
import './OneChart.css'
import {Line} from "react-chartjs-2";
import {database} from "../../firebase";

function OneChart({pregnancies, glucose, bloodPressure, insulin, value, bmi, skinThickness, age, timestamp}) {
    const [message,setMessage] = useState()

    useEffect(()=>{
        const intValue = parseFloat(value)

        if (intValue<=10){
             database.collection('diets')
                .doc('1')
                .get()
                 .then(doc=>{
                     setMessage(doc.data().message)
                 })
        }else if (intValue>10 && intValue<=20){
            database.collection('diets')
                .doc('2')
                .get()
                .then(doc=>{
                    setMessage(doc.data().message)
                })
        }else if (intValue>20 && intValue<=30){
            database.collection('diets')
                .doc('3')
                .get()
                .then(doc=>{
                    setMessage(doc.data().message)
                })
        }else if (intValue>30 && intValue<=40){
            database.collection('diets')
                .doc('4')
                .get()
                .then(doc=>{
                    setMessage(doc.data().message)
                })
        }else if (intValue>40 && intValue<=50){
            database.collection('diets')
                .doc('5')
                .get()
                .then(doc=>{
                    setMessage(doc.data().message)
                })
        }else if (intValue>50 && intValue<=60){
            database.collection('diets')
                .doc('6')
                .get()
                .then(doc=>{
                    setMessage(doc.data().message)
                })
        }else if (intValue>60 && intValue<=70){
            database.collection('diets')
                .doc('7')
                .get()
                .then(doc=>{
                    setMessage(doc.data().message)
                })
        }else if (intValue>70 && intValue<=80){
            database.collection('diets')
                .doc('8')
                .get()
                .then(doc=>{
                    setMessage(doc.data().message)
                })
        }else if (intValue>80 && intValue<=90){
            database.collection('diets')
                .doc('9')
                .get()
                .then(doc=>{
                    setMessage(doc.data().message)
                })
        }else if (intValue>90){
            database.collection('diets')
                .doc('10')
                .get()
                .then(doc=>{
                    setMessage(doc.data().message)
                })
        }
    },[value])

    const data={
        labels: ['Glucose','Blood Pressure','Insulin','Diabetic Value'],
        datasets: [
            {
                data: [parseFloat(glucose),parseFloat(bloodPressure),parseFloat(insulin),parseFloat(value)],
                label: "About You",
                borderColor: 'teal',
                fill: true,
                lineTension: 0.1
            }
        ]
    }

    return(
        <div className="one-chart">
            <h3>{timestamp}</h3>

            <div className="history-chart">
                <Line data={data}/>
            </div>

            <p className="onechart-message">
                {message}
            </p>

            <div className="all-data">
                <p>Pregnancies: {pregnancies}</p>
                <p>Glucose: {glucose}</p>
                <p>Blood Pressure: {bloodPressure}</p>
                <p>Skin Thickness: {skinThickness}</p>
                <p>Insulin: {insulin}</p>
                <p>BMI: {bmi}</p>
                <p>Age: {age}</p>
                <p>Diabetic Value: {value}</p>
            </div>
        </div>
    )
}

export default OneChart;