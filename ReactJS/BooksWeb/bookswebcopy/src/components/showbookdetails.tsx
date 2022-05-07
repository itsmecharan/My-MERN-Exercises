// import axios from 'axios';
import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

export const ShowBookDetails: React.FC = () => {

    const { state } = useContext(BookContext);
    const book = { ...state.BookDetails };


    const style = {

        display: 'inline-flex'
    }
    return (
        <div>
            {
                <div style={style}>
                    <div className="descimage">
                        <img src={book.BookCover} width="500" height="500" />
                    </div>
                    <div className="desc">
                        <b>Book Title:</b>{book.BookTitle} <br />
                        <b>Book Id:</b>{book.BookId} <br />
                        <b>Book Author:</b>{book.BookAuthor} <br />
                        <b>Book rating:</b>{book.BookRating} <br />
                        <b>Book Price:</b>{book.BookPrice} <br />
                        <b>Book Description:</b>{book.BookDescription} <br />
                    </div>
                </div>






            }



        </div>
    );
}