import React from "react";
import './SuperChart.css'
import {Line} from "react-chartjs-2";

function SuperChart({historyData}) {
    const datasets = historyData.map((doc,index)=>{

        return{
            data: [doc.glucose, doc.bloodPressure, doc.insulin, doc.value],
            label: doc.label,
            borderColor: doc.color,
            fill: true,
            lineTension: 0.1
        }
    })

    const data={
        labels: ['Glucose','Blood Pressure','Insulin','Diabetic Value'],
        datasets: datasets
    }

    return(
        <div className="super-chart">

            <div className="history-chart">
                <Line data={data}/>
            </div>
        </div>
    )
}

export default SuperChart;