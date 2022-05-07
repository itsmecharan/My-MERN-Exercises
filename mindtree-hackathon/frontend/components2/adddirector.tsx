import React, { useState } from 'react';
import axios from 'axios'
export const AddDirector: React.FC = (() => {
    const [message, setMessage] = useState(String);
    const [name, setName] = useState(String);
    const [age, setAge] = useState(String);
    const [gender, setGender] = useState(String);
    const [awards, setAwards] = useState(Number);
    function add() {
        axios.post('/adddirector', {

            DName: name,
            DAge: age,
            DGender: gender,
            DAwards: awards

        })
            .then((res: any) => {
                setMessage(res.data.message);
            })
            .catch((error: any) => {
                console.log(error);
                setMessage(error.response.data.message)
            })
    }


    return (
        <div>
            <div className="addmovieform">
                <br /><br />
                <input type="text" placeholder="Director name"
                    onChange={(e) => { setName(e.target.value) }} /> <br /><br />
                <input type="text" placeholder="Director Age"
                    onChange={(e) => { setAge(e.target.value) }} /><br /><br />
                <input type="text" placeholder="Director Gender"
                    onChange={(e) => { setGender(e.target.value) }} /><br /><br />
                <input type="number" placeholder="Number of Awards Director Won "
                    onChange={(e) => { setAwards(e.target.valueAsNumber) }} /><br /><br />
                <button type="button" onClick={() => add()}>
                    Add Director
                </button><br /> <br />
                {
                    message
                }
            </div>

        </div>
    )
})