import axios from 'axios';
import React,{useState} from 'react'

export default function Login() {
    const [email,setEmail]=useState(String);
    const [password,setPassword]=useState(String);
    const [message,setMessage]=useState(String);
    const makelogin=(e)=>{
        e.preventDefault();
        axios.post('/post/login',{
            email:email,
            password:password
        })
        .then((res)=>{
            setMessage(res.data.message);
            setEmail('');
            setPassword('');
        })
        .catch((err)=>{
            setMessage(err.response.data.message);
        })

    }
    return (
        <div>
            <form className="form-group" onSubmit={(e)=>{makelogin(e)}}> 
                <h3 >Login</h3>
                
                    <input type="text" className="form-control" placeholder="Email id" value={email}
                    required onChange={(e)=>{setEmail(e.target.value)}}/>
                <br />
                
                    <input type="password" className="form-control" placeholder="Password"  value={password}
                    required onChange={(e)=>{setPassword(e.target.value)}}/>
                 <br />
                    <button className="btn btn-primary btn-block" type="submit">Login</button>
                    <br />
                    <br />
                    {
                        message !== "" ?
                        message
                        :
                        null
                    }
                
            </form>
        </div>
    )
}
