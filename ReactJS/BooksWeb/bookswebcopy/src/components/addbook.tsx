import axios from 'axios';
import React, { useState, useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { BookContext } from '../contexts/BookContext';
// import axios from 'axios';
// import { UserLogin } from './UserLogin';

export const AddBook: React.FC = () => {
    const [bookcover, setBookcover] = useState(String);
    const [bookid, setBookid] = useState(String);
    const [booktitle, setBooktitle] = useState(String);
    const [bookauthor, setBookauthor] = useState(String);
    const [bookrating, setBookrating] = useState(Number);
    const [hover, setHover] = useState(Number);
    const [bookprice, setBookprice] = useState(Number);
    const [bookdesc, setBookdesc] = useState(String);
    const { dispatch } = useContext(BookContext);


    function updateInput(key: string, value: any) {
        if (key == 'bookcover')
            setBookcover(value)
        if (key == 'bookid')
            setBookid(value);
        if (key == 'booktitle')
            setBooktitle(value);
        if (key == 'bookauthor')
            setBookauthor(value);
        if (key == 'bookrating')
            setBookrating(value);
        if (key == 'bookprice')
            setBookprice(value);
        if (key == 'adddesc')
            setBookdesc(value);
    }
    function add(e: any) {
        e.preventDefault();
            axios.post('/books', {
                bookcover: bookcover,
                bookid: bookid,
                booktitle: booktitle,
                bookauthor: bookauthor,
                bookrating: bookrating,
                bookprice: bookprice,
                bookdesc: bookdesc
            }, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': "Bearer " + localStorage.getItem("token")
                }
            })
                .then((response: any) => {
                    console.log(response.data.message);
                    dispatch({ type: 'ADD_BOOK', payload: {} });
                })
                .catch((error: any) => {
                    console.log(error);
                   
                });
        setBookcover('');
        setBookauthor('');
        setBookdesc('');
        setBookid('');
        setBookprice(0);
        setBookrating(0);
        setBooktitle('');
        setHover(0);

    }


    return (


        <div>
            <div className="addbook">
                <form onSubmit={(e) => { add(e) }}>
                    <label> Book Cover Url:</label><input type="text" className="addbooks" required
                        value={bookcover} onChange={(e) => updateInput('bookcover', e.target.value)}
                    /><br /><br />
                    <label>Book Id :</label><input type="text" className="addbooks" required
                        value={bookid} onChange={(e) => updateInput("bookid", e.target.value)} /><br /><br />
                    <label>Book Title :</label><input type="text" className="addbooks" required
                        value={booktitle} onChange={(e) => updateInput("booktitle", e.target.value)} /><br /><br />
                    <label>Book Author :</label><input type="text" className="addbooks" required
                        value={bookauthor} onChange={(e) => updateInput("bookauthor", e.target.value)} /><br /><br />
                    <label>Book Rating :</label>
                    {[...Array(5)].map((_, i) => {
                        const ratingValue = i + 1;
                        return <label>
                            <input type="radio"
                                name="rating" className="radiobtn"
                                required
                                value={ratingValue}
                                onClick={() => setBookrating(ratingValue)} />
                            <FaStar className="star"
                                size={25}
                                color={ratingValue <= (hover || bookrating) ? "gold" : "gray"}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}

                            />
                        </label>
                    })}

                    <br />
                    <br />
                    <label>Book Price :</label><input type="number" className="addbooks" required
                        value={bookprice} onChange={(e) => updateInput("bookprice", e.target.value)} /><br /><br />
                    <br />
                    <label>Add Description</label>
                    <textarea
                        className="addbooks"
                        placeholder="write about book"
                        value={bookdesc}
                        required
                        onChange={(e) => updateInput("adddesc", e.target.value)}
                    /> <br /> <br />
                    <button type="submit" className="addbooksbtn" >Add</button>
                </form>
                <br />
                <br />

            </div>

        </div>

    );
}



