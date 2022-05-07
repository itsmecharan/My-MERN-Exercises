import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

import { DisplayBooks } from './displaybooks';
import { useEffect } from 'react';
import axios from 'axios';
export const Books: React.FC = (() => {
    const { dispatch } = useContext(BookContext);


    useEffect(() => {

        axios.get('/books', {
            headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer " + localStorage.getItem("token")
            }
        })
            .then((res: any) => {
                dispatch({ type: 'RESET', payload: { task: 'books' } });
                dispatch({ type: 'GET_ALL_BOOKS', payload: { booksdata: [...res.data] } });
            })
            .catch((error: any) => {
                console.log(error);
                dispatch({ type: 'RESET', payload: { task: 'books' } });
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log('token problem');

                }
            })

    }, []);
    return (
        <div className="book">
            <DisplayBooks />
            <br />
            <div className="booklistmsg">
            </div>
        </div>
    );
})