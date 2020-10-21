import React, {useEffect, useState} from "react";
import './Dashboard.css';
import NavBar from "../NavBar/NavBar";
import {useStateValue} from "../../StateProvider";
import {useHistory} from 'react-router-dom';
import {Button, IconButton} from "@material-ui/core";
import submit from "../../fetch";
import { Dialog } from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {Line} from "react-chartjs-2";

function Dashboard() {
    const [{user}] = useStateValue();
    const history = useHistory();

    const [pregnancies,setPregnancies] = useState('')
    const [glucose,setGlucose] = useState('')
    const [skinThickness,setSkinThickness] = useState('')
    const [insulin,setInsulin] = useState('')
    const [bloodPressure,setBloodPressure] = useState('')
    const [age,setAge] = useState('')
    const [bmi,setBmi] = useState('')
    const [value,setValue] = useState({});
    const [open,setOpen] = useState(false);

    const data = {
        labels: ['Glucose','Blood Pressure','Insulin','Diabetic Value'],
        datasets: [
            {
                data: [parseFloat(glucose),parseFloat(bloodPressure),parseFloat(insulin),(parseFloat(value?.value) * 100).toFixed(2)],
                label: "About You",
                borderColor: (parseFloat(value?.value) * 100).toFixed(2)<50? "teal": "#FF385Cs",
                fill: true,
                lineTension: 0.1
            }
        ]
    }

    useEffect(()=>{
        if (!user) history.replace('/')
    },[user,history])

    const submitValues =  (event)=>{
        event.preventDefault();

         submit(user,pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,age,setValue)

        handleOpen();
    }

    useEffect(()=>{
        console.log("This is value",value)
    },[value])

    function handleEnter(event) {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    }

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    const handleDialogClose = ()=>{
        handleClose();
        setValue({})
        setBmi('')
        setAge('')
        setBloodPressure('')
        setSkinThickness('')
        setGlucose('')
        setInsulin('')
        setPregnancies('')
    }

    return (
        <div className="dashboard">
            <NavBar/>

            <div className="dashboard-main">
                <h3>Find out your diabetes score</h3>

                <div className="dashboard-form">
                    <form onSubmit={submitValues}>
                        <div className="input">
                            <p>Pregnancies <span>(0 if male)</span></p>
                            <input onKeyDown={handleEnter} type="text" value={pregnancies} onChange={e=>setPregnancies(e.target.value)}/>
                        </div>
                        <div className="input">
                            <p>Glucose</p>
                            <input onKeyDown={handleEnter} type="text" value={glucose} onChange={e=>setGlucose(e.target.value)}/>
                        </div>
                        <div className="input">
                            <p>BloodPressure</p>
                            <input onKeyDown={handleEnter} type="text" value={bloodPressure} onChange={e=>setBloodPressure(e.target.value)}/>
                        </div>
                        <div className="input">
                            <p>Skin Thickness</p>
                            <input onKeyDown={handleEnter} type="text" value={skinThickness} onChange={e=>setSkinThickness(e.target.value)}/>
                        </div>
                        <div className="input">
                            <p>Insulin</p>
                            <input onKeyDown={handleEnter} type="text" value={insulin} onChange={e=>setInsulin(e.target.value)}/>
                        </div>
                        <div className="input">
                            <p>BMI</p>
                            <input onKeyDown={handleEnter} type="text" value={bmi} onChange={e=>setBmi(e.target.value)}/>
                        </div>
                        <div className="input">
                            <p>Age</p>
                            <input type="text" value={age} onChange={e=>setAge(e.target.value)}/>
                        </div>

                        <Button type={'submit'} className={'fetch-button'}>Submit</Button>

                    </form>
                </div>
                <Dialog className={'dialog'} open={open} onClose={handleClose} fullScreen>
                    <IconButton className={'close-button-dialog'} onClick={handleDialogClose}>
                        <Close/>
                    </IconButton>
                    <h2>Your diabetes probability is {(parseFloat(value.value) * 100).toFixed(2)}</h2>
                    <div id="chart">
                        <Line data={data}/>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default Dashboard;