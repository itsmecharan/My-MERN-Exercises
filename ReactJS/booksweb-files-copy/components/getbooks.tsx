import { useState } from 'react';
import axios from 'axios';
import { Books } from './books';
export const Getbooks: React.FC = (() => {
    const [bookdetails, setBookdetails] = useState(Array);
        axios.get('/getbooks')
            .then(res => {
                setBookdetails([...res.data]);
            })
            .catch((error) => {
                console.log(error);
            })
    
    return (
        <Books bookdetails={bookdetails} />
    );

})