import React, { useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useContext } from 'react';
import axios from 'axios';
export const UserLogin: React.FC = (() => {
    const [emailid, setEmailid] = useState(String);
    const [password, setPassword] = useState(String);
    const { state, dispatch } = useContext(BookContext);
    const [message, setMessage] = useState('');

    const UpdateInput = ((key: string, value: any) => {

        if (key === "email")
            setEmailid(value);

        if (key === "password")
            setPassword(value);

    })
    const login = (e: any) => {


        e.preventDefault();
        //console.log(true)


        axios.post('/login', {
            password: password,
            email: emailid
        })
            .then((response: any) => {
                console.log(" Logged in Successfully!");
                const { ...data } = response.data;
                dispatch({ type: 'RESET', payload: { task: 'loggedInUser' } })
                dispatch({ type: 'LOGIN', payload: { emailid: data.EmailId, token: data.token } });
                localStorage.setItem("token", data.token);
                setMessage('Logged In Successfully');
                console.log("email: " + state.loggedInUser.email + "/n"
                    + "token: " + state.loggedInUser.token);
            })
            .catch((error: any) => {
                dispatch({ type: 'RESET', payload: { task: 'loggedInUser' } })
                console.log('login failed due to ' + error.response.data.message);
                setMessage('login failed!');
            });



    }
    return (

        <div className="login">
            <h3>User Login</h3>
            <form onSubmit={(e) => { login(e) }}>
                <input type="text" placeholder="Email Id" value={emailid} required
                    onChange={(e) => { UpdateInput("email", e.target.value) }}
                /><br /><br />

                <input type="password" placeholder="Password" value={password} required
                    onChange={(e) => { UpdateInput("password", e.target.value) }}
                /><br /><br />
                <button type="submit" >Login</button>
            </form>
            <br />
            <br />
            {
                message !== '' ?
                    message :
                    null
            }
        </div>
    );



})