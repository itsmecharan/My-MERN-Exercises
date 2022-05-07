import axios from 'axios';
import React,{useState} from 'react'

export default function Register() {
    const [username,setUsername]=useState(String);
    const [email,setEmail]=useState(String);
    const [password,setPassword]=useState(String);
    const [confirmpassword,setConfirmpassword]=useState(String);
    const [message,setMessage]=useState(String);
    const signup=(e)=>{
        e.preventDefault();
        if(password === confirmpassword){
            axios.post('/post/register',{
                username:username,
                password:password,
                email:email
            })
            .then((res)=>{
                setMessage(res.data.message);
                setPassword('');
                setUsername('');
                setEmail('');
                setConfirmpassword('');
            })
            .catch((err)=>{
                setMessage(err.response.data.message)
            })
        }
        else{
            setMessage('Password fields not matched')
        }
        
    }
    return (
        <div>
            <form className="form-group" onSubmit={(e)=>{signup(e)}}> 
                <h3 >Sign Up</h3>
               
                    <input type="text" className="form-control" placeholder="User Name" value={username}
                     required onChange={(e)=>{setUsername(e.target.value)}}/>
                <br />
                
                    <input type="text" className="form-control" placeholder="Email id" value={email}
                    required onChange={(e)=>{setEmail(e.target.value)}} />
                <br />
                
                    <input type="password" className="form-control" placeholder="Password" value={password}
                    required onChange={(e)=>{setPassword(e.target.value)}}/>
                 <br />
                
                    <input type="password" className="form-control" placeholder="Confirm Password" 
                    value={confirmpassword} required onChange={(e)=>{setConfirmpassword(e.target.value)}}/>
                <br />
                
                    <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                    <br />
                    <br />
                {
                    message!=='' ?
                    message:
                    null
                }
            </form>
        </div>
    )
}
