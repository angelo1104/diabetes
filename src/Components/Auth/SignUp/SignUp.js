import React, {useState} from "react";
import './SignUp.css';
import {Button} from "@material-ui/core";

function SignUp() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    return (
        <div className="signup">
            <form className={'signup-form'}>
                <input type="text" placeholder={'username'} value={username} onChange={e=>setUsername(e.target.value)}/>
                <input type="email" placeholder={'Your email'} value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder={'Your password'} value={password} onChange={e=>setPassword(e.target.value)}/>
                <Button type={'submit'}>Submit</Button>
            </form>
        </div>
    )
}

export default SignUp;