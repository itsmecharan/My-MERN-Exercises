import React,{useState} from 'react';
import axios from 'axios';


interface Props{
    valid?:string,
    handleLogin?:any
}
export const UserLogin: React.FC<Props> = (({handleLogin}) =>{
    const [emailid,setEmailid] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const UpdateInput=((key:string,value:any) =>{
       
        if(key==="email")
        setEmailid(value)
        
        if(key === "password")
        setPassword(value)

    })
    const login=((e:any) =>{
        e.preventDefault();
        axios.post('/login', {
          
           password:password,
           email:emailid,
           
        },)
            .then((response: any) => {
                
                console.log(" Logged in Successfully!");
                const {...data}=response.data;
                if(data.message !==''){
                    setMessage(data.UserName+"'s "+data.message)
                }
                handleLogin(data.token);
                //console.log(data.PhoneNumber);
                setEmailid('');
                setPassword('');
               
            })
            .catch((error) => {
                console.log('login failed due to '+error.response.data.message);
                setMessage(error.response.data.message);
                handleLogin(error.response.data.message);

            });

           
    })
    return(
        
        <div className="login">
            <h3>User Login</h3>
          <form onSubmit={(e) =>{login(e)}}>
            <input type="text" placeholder="Email Id" value={emailid} required
            onChange={(e)=>{UpdateInput("email",e.target.value)}}
            /><br /><br />
           
            <input type="password" placeholder="Password" value={password} required
            onChange={(e)=>{UpdateInput("password",e.target.value)}}
            /><br /><br />
            <button type="submit" >Login</button>
            </form>
            <br />
            <br />
            {
                (message !=='')?
                message
                :
                null
            }
        </div>
    );



})