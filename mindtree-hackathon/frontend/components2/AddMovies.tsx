import React, { useState } from 'react';
import axios from 'axios'
export const AddMovies: React.FC = (() => {
    const [message, setMessage] = useState(String);
    const [name, setName] = useState(String);
    const [id, setId] = useState(String);
    const [collection, setCollection] = useState(Number);
    const [rating, setRating] = useState(Number);
    function add() {
        axios.post('/addmovie', {

            MName: name,
            MId: id,
            MCollection: collection,
            MRating: rating

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
                <input type="text" placeholder="movie name"
                    onChange={(e) => { setName(e.target.value) }} /> <br /><br />
                <input type="text" placeholder="movie id"
                    onChange={(e) => { setId(e.target.value) }} /><br /><br />
                <input type="number" placeholder="movie collection"
                    onChange={(e) => { setCollection(e.target.valueAsNumber) }} /><br /><br />
                <input type="number" placeholder="movie rating"
                    onChange={(e) => { setRating(e.target.valueAsNumber) }} /><br /><br />
                <button type="button" onClick={() => add()}>
                    Add Movie
                </button><br /> <br />
                {
                    message
                }
            </div>

        </div>
    )
})