import React, { useState } from 'react';
//import axios from 'axios';
import { BookContext } from '../contexts/BookContext';
import { useContext } from 'react';
import axios from 'axios';


interface Props {
    name?: any
}
export const UserRegistration: React.FC<Props> = (() => {
    const [username, setUsername] = useState(String);
    const [emailid, setEmailid] = useState(String);
    const [phonenumber, setPhonenumber] = useState(String);
    const [password, setPassword] = useState(String);
    const [message, setMessage] = useState(String);
    const { dispatch } = useContext(BookContext);


    const UpdateInput = ((key: string, value: string) => {
        if (key === "username")
            setUsername(value)
        if (key === "email")
            setEmailid(value)
        if (key === "phone")
            setPhonenumber(value)
        if (key === "password")
            setPassword(value)

    })
    const register = ((e: any) => {
        e.preventDefault();
        dispatch({ type: 'RESET', payload: { task: 'registereduser' } });
        axios.post('/signup', {
            username: username,
            password: password,
            email: emailid,
            phnum: phonenumber
        })
            .then((response: any) => {
                console.log(" User Registered Successfully!");
                const { ...data } = response.data;
                dispatch({
                    type: 'SIGNUP', payload: {
                        username: data.username,
                        emailid: data.emailid,
                        message: data.message
                    }
                });
                setMessage(data.message)
                setUsername('');
                setEmailid('');
                setPassword('');
                setPhonenumber('');
            })
            .catch((error: any) => {
                dispatch({
                    type: 'SIGNUP', payload: {
                        username: '', emailid: '',
                        message: error.response.data.message
                    }
                });
                setMessage(error.response.data.message);
            })


    })
    return (
        <div>
            <div className="register">
                <h3>SignUp</h3>
                <form onSubmit={(e) => register(e)}>
                    <input type="text" placeholder="User Name" value={username} required
                        onChange={(e) => { UpdateInput("username", e.target.value) }}
                    /><br /><br />
                    <input type="text" placeholder="Email Id" value={emailid} required
                        onChange={(e) => { UpdateInput("email", e.target.value) }}
                    /><br /><br />
                    <input type="text" placeholder="Phone Number" value={phonenumber} required
                        onChange={(e) => { UpdateInput("phone", e.target.value) }}
                    /><br /><br />
                    <input type="password" placeholder="Password" value={password} required
                        onChange={(e) => { UpdateInput("password", e.target.value) }}
                    /><br /><br />
                    <button type="submit">register</button>
                </form>
                <br />
                <br />
                {
                    message != "" ?
                        message
                        :
                        null

                }
            </div>
        </div>
    );



})