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
import {database} from "../../firebase";
import Lottie from "lottie-react-web";
import animation from './paperplanelottie.json'
import OneChart from "../OneChart/OneChart";

function Dashboard() {
    const [{user, history}] = useStateValue();
    const routerHistory = useHistory();

    const [pregnancies,setPregnancies] = useState('')
    const [glucose,setGlucose] = useState('')
    const [skinThickness,setSkinThickness] = useState('')
    const [insulin,setInsulin] = useState('')
    const [bloodPressure,setBloodPressure] = useState('')
    const [age,setAge] = useState('')
    const [bmi,setBmi] = useState('')
    const [value,setValue] = useState('0.05');
    const [open,setOpen] = useState(false);
    const [message,setMessage] = useState('')

    const [processing,setProcessing] = useState(false)

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
        if (!user) routerHistory.replace('/')
    },[user,routerHistory])

    const submitValues = async (event)=>{
        event.preventDefault();

        setProcessing(true)

         await submit(user,pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,age,setValue)

        handleOpen();

    }

    useEffect(()=>{
        console.log("This is value",value)

        const intValue = parseFloat(value.value) * 100

        console.log(intValue)

        if (intValue<=10){
            database.collection('diets')
                .doc('1')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }else if (intValue>10 && intValue<=20){
            database.collection('diets')
                .doc('2')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }else if (intValue>20 && intValue<=30){
            database.collection('diets')
                .doc('3')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }else if (intValue>30 && intValue<=40){
            database.collection('diets')
                .doc('4')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }else if (intValue>40 && intValue<=50){
            database.collection('diets')
                .doc('5')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }else if (intValue>50 && intValue<=60){
            database.collection('diets')
                .doc('6')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }else if (intValue>60 && intValue<=70){
            database.collection('diets')
                .doc('7')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }else if (intValue>70 && intValue<=80){
            database.collection('diets')
                .doc('8')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }else if (intValue>80 && intValue<=90){
            database.collection('diets')
                .doc('9')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }else if (intValue>90){
            database.collection('diets')
                .doc('10')
                .get()
                .then(doc=>{
                    console.log(doc.data())
                    setMessage(doc.data().message)
                })
        }

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
        setProcessing(false)
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

    const moveToHistory = (event)=>{
        routerHistory.push('/track-history')
    }

    return (
        <div className="dashboard">
            <NavBar/>

            <div className="dashboard-main">
                <Button className={'history-button'} onClick={moveToHistory}>
                    <p className={'track-history-button'}>Track History</p>
                </Button>

                <h3>Find out your diabetes score</h3>

                <div className="dashboard-form">
                    <form onSubmit={submitValues}>
                        <div className="input">
                            <p>Pregnancies <span>(0 if male)</span></p>
                            <input autoFocus onKeyDown={handleEnter} type="text" value={pregnancies} onChange={e=>setPregnancies(e.target.value)}/>
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

                        <Button disabled={processing} type={'submit'} className={'fetch-button'}>
                            {!processing && 'Submit'}
                            {
                                processing && <Lottie options={{
                                    animationData: animation
                                }}/>
                            }
                        </Button>

                    </form>
                </div>
                <Dialog className={'dialog'} open={open} onClose={handleClose} fullScreen>
                    <IconButton className={'close-button-dialog'} onClick={handleDialogClose}>
                        <Close/>
                    </IconButton>
                    <h2>Your diabetes probability is {(parseFloat(value.value) * 100).toFixed(2)}</h2>
                    <h3>{message}</h3>
                    <div id="chart">
                        <Line data={data}/>
                    </div>
                    <OneChart {...history[1]}/>
                </Dialog>
            </div>
        </div>
    )
}

export default Dashboard;