import React, {useEffect} from "react";
import './History.css'
import NavBar from "../NavBar/NavBar";
import OneChart from "../OneChart/OneChart";
import {useStateValue} from "../../StateProvider";
import {database} from "../../firebase";

function History() {
    const [{history,user}, dispatch] = useStateValue()

    useEffect(()=>{

        if (user){
            database.collection('users')
                .doc(user?.email)
                .collection('history')
                .orderBy('timestamp','desc')
                .limit(4)
                .onSnapshot(snapshot => {
                    dispatch({
                        type: 'SET_HISTORY',
                        history: snapshot.docs.map(doc=>{
                            return {
                                id: doc.id,
                                ...doc.data(),
                            }
                        })
                    })
                })
        }
    },[user, dispatch])

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