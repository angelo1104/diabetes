import React, {useState} from "react";
import './Login.css';
import {Button} from "@material-ui/core";
import {auth} from "../../../firebase";
import {Link} from "react-router-dom";

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

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
               <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder={'email'}/>
               <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={'password'}/>

               <Button type={'submit'}>Submit</Button>

               <p className="dont">Don't have an account yet? <Link to={'signup'}>Sign Up</Link> here.</p>
           </form>
        </div>
    )
}

export default Login;