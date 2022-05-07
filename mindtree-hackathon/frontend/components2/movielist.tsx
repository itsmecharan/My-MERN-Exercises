import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const MovieList: React.FC = (() => {
    const [movies, setMovies] = useState(Array);
    useEffect(() => {
        axios.get('/getallmovies')
            .then((res: any) => {
                setMovies([...res.data]);
            })
            .catch((error: any) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            {
                movies.map((movie: any) => {
                    return (
                        <ul>
                            <li>{movie.MovieName}</li>
                            <li>{movie.MovieId}</li>
                            <li>{movie.MovieCollection}</li>
                            <li>{movie.MovieRating}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
})