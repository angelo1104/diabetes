import React, {useEffect, useState} from "react";
import './Login.css';
import {Button} from "@material-ui/core";
import {auth} from "../../../firebase";
import {Link, useHistory} from "react-router-dom";
import {useStateValue} from "../../../StateProvider";

function Login() {
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [{user}] = useStateValue();

    useEffect(()=>{
        if (user) history.replace('/dashboard')
    },[user, history])

    function handleEnter(event) {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    }

    const submitLoginForm = (event)=>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then(authUser=>{
                console.log(authUser)
            })
            .catch(error=>{
                alert(error.message)
            })
    }

    return (
        <div className="login">
           <form className="login-form" onSubmit={submitLoginForm}>
               <input onKeyDown={handleEnter} type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder={'email'}/>
               <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={'password'}/>

               <Button type={'submit'}>Submit</Button>

               <p className="dont">Don't have an account yet? <Link to={'signup'}>Sign Up</Link> here.</p>
           </form>
        </div>
    )
}

export default Login;