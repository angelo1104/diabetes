import React, {useEffect, useState} from "react";
import './History.css'
import NavBar from "../NavBar/NavBar";
import OneChart from "../OneChart/OneChart";
import {useStateValue} from "../../StateProvider";
import SuperChart from "../SuperChart/SuperChart";

function History() {
    //eslint-disable-next-line
    const [{history,user}, dispatch] = useStateValue()

    const [superHistory, setSuperHistory] = useState([])

    const colors = ['#ff9e80','#ba68c8','teal','#4dd0e1']

    useEffect(()=>{
        const dataForChart = history.map((doc,index)=>{
            return {
                glucose: doc.glucose,
                insulin: doc.insulin,
                bloodPressure: doc.bloodPressure,
                value: doc.bloodPressure,
                color: colors[index],
                label: doc.timestamp
            }
        })

        setSuperHistory(dataForChart)
    },[history, colors])


    return(
        <div className="history">
            <NavBar/>
            <div className="histories">
                <SuperChart historyData={superHistory}/>
                {
                    history.map(doc=>{
                        return (
                            <OneChart key={doc.id} {...doc} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default History;