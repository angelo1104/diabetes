import React, {useEffect, useState} from "react";
import './SignUp.css';
import {Button} from "@material-ui/core";
import {auth} from "../../../firebase";
import {Link, useHistory} from "react-router-dom";
import {useStateValue} from "../../../StateProvider";

function SignUp() {
    const history = useHistory();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [{user}]= useStateValue();

    useEffect(()=>{
        if (user) history.replace('/dashboard')
    },[user,history])

    const submitSignUp = (event)=>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
            .then(authUser=>{
                authUser.user.updateProfile({
                    displayName: username
                })

                authUser.user.sendEmailVerification();
            })
            .catch(error=>{
                alert(error.message)
            })
    }

    return (
        <div className="signup">
            <form className={'signup-form'} onSubmit={submitSignUp}>
                <input type="text" placeholder={'username'} value={username} onChange={e=>setUsername(e.target.value)}/>
                <input autoComplete={'on'} type="email" placeholder={'Your email'} value={email} onChange={e=>setEmail(e.target.value)}/>
                <input autoComplete={'on'} type="password" placeholder={'Your password'} value={password} onChange={e=>setPassword(e.target.value)}/>
                <Button type={'submit'}>Submit</Button>

                <p className="dont">Got yourselves an account? <Link to={'/login'}>Login</Link> here.</p>
            </form>
        </div>
    )
}

export default SignUp;