import React, { useState, useEffect } from 'react';
import axios from 'axios'
interface props {
    name?: string
}
export const Directors: React.FC<props> = (({ name }) => {
    const [directors, setDirectors] = useState(Array);
    useEffect(() => {
        axios.get(`/getdirectorbyname/${name}`)
            .then((res: any) => {
                setDirectors([...res.data]);
            })
            .catch((error: any) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            {
                directors.map((director: any) => {
                    return (
                        <ul>
                            <li>{director.DirectorName}</li>
                            <li>{director.Age}</li>
                            <li>{director.Gender}</li>
                            <li>{director.Awards}</li>
                        </ul>
                    )
                })
            }

        </div>
    )
})