import React from "react";
import './History.css'
import NavBar from "../NavBar/NavBar";
import OneChart from "../OneChart/OneChart";
import {useStateValue} from "../../StateProvider";

function History() {
    //eslint-disable-next-line
    const [{history,user}, dispatch] = useStateValue()


    return(
        <div className="history">
            <NavBar/>
            <div className="histories">
                {
                    history.map(doc=>{
                        console.log(doc)
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