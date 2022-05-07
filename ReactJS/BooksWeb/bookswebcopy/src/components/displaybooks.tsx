
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {
    useContext,
    // useEffect 
} from 'react';
import { BookContext } from '../contexts/BookContext';


export const DisplayBooks: React.FC = () => {
    const { state, dispatch } = useContext(BookContext);
    const books: any = [...state.books];
    const deletebook = (id: string) => {
        console.log(id);
        dispatch({ type: 'DELETE_BOOK', payload: { bookid: id } });
    }
    const getId = (id: string) => {
        dispatch({ type: 'BOOK_DETAILS', payload: { bookid: id } });
    }
    return (
        <div>
            <div className="grid-container">

                {
                    books.map((book: any) => {
                        //console.log(book.BookCover);

                        return (
                            <div className="grid-item" >

                                <img src={`${book.BookCover}`}
                                    width="150" height="200" /><br />
                                <Link to="/bookdescription" onClick={() => { getId(book.BookId) }}>
                                    {book.BookTitle}</Link><br />

                                <b>Book Id:</b> {book.BookId}<br />

                                <b>Book Author:</b>{book.BookAuthor}<br />
                                <b>Book Rating:</b>{
                                    [...Array(5)].map((_, i) => {
                                        const ratingValue = i + 1;
                                        return (
                                            <FaStar

                                                className="star"
                                                size={15}
                                                color={(ratingValue <= book.BookRating) ? "red" : "gray"}
                                            />
                                        )

                                    })}


                                <br />

                                <b>Book Price:</b>{book.BookPrice}<br />
                                <button className="del" onClick={() => deletebook(book.BookId)}>
                                    delete</button>


                            </div>

                        );
                    })

                }

            </div>
        </div>





    );
}