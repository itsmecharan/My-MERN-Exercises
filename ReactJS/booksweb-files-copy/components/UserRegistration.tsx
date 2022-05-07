import React,{useState} from 'react';
import axios from 'axios';


interface Props{
    name?:any
}
export const UserRegistration: React.FC<Props> = (() =>{
    const [username,setUsername] = useState('');
    const [emailid,setEmailid] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');

    const UpdateInput=((key:string,value:string) =>{
        if(key==="username")
        setUsername(value)
        if(key==="email")
        setEmailid(value)
        if(key==="phone")
        setPhonenumber(value)
        if(key === "password")
        setPassword(value)

    })
    const register=((e:any) =>{
        e.preventDefault();
        axios.post('/signup', {
           username:username,
           password:password,
           email:emailid,
           phnum:phonenumber
        })
            .then((response: any) => {
                console.log(response.data.message);
                setMessage(response.data.message);
                setUsername('');
            setEmailid('');
            setPhonenumber('');
            setPassword('');
            })
            .catch((error: any) => {
                console.log(error.response.data.message);
                setMessage(error.response.data.message);
            });
            
        
      
    })
    return(
        <div>
        <div className="register">
            <h3>SignUp</h3>
            <form onSubmit={(e) =>register(e)}>
            <input type="text" placeholder="User Name" value={username} required
            onChange={(e)=>{UpdateInput("username",e.target.value)}}
            /><br /><br />
            <input type="text" placeholder="Email Id" value={emailid} required
            onChange={(e)=>{UpdateInput("email",e.target.value)}}
            /><br /><br />
            <input type="text" placeholder="Phone Number" value={phonenumber} required
            onChange={(e)=>{UpdateInput("phone",e.target.value)}}
            /><br /><br />
            <input type="password" placeholder="Password" value={password} required
            onChange={(e)=>{UpdateInput("password",e.target.value)}}
            /><br /><br />
            <button type="submit">register</button>
            </form>
            <br />
            <br />
            {
                (message !== '')?
                message
                :
                null
            }
        </div>
        </div>
    );



})