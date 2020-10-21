import {database} from "./firebase";

const submit = async (user,pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,age,setValue)=>{
    const data = {
        pregnancies: pregnancies,
        glucose: glucose,
        bloodPressure: bloodPressure,
        skinThickness: skinThickness,
        insulin: insulin,
        bmi: bmi,
        age: age
    }

    const request = await fetch("https://5000-ea1ae6c0-2b73-44b1-968f-114464ef1a39.ws-us02.gitpod.io/model",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }
    );

    const response = await request.json();

    setValue(response);

    await database.collection('users')
        .doc(user.email)
        .collection('history')
        .add({
            pregnancies,
            glucose,
            bloodPressure,
            skinThickness,
            insulin,
            bmi,
            age,
            value : response.value,
            timestamp: new Date().toLocaleString("en-US", {timeZone: "America/New_York"}),
        })

}

export default submit;