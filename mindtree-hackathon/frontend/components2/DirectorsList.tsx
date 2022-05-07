import React, { useState, useEffect } from 'react';
import { Directors } from './Directors';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios'
export const DirectorsList: React.FC = (() => {
    const [directorlist, setDirectorlist] = useState(Array);
    const [name, setName] = useState(String);
    useEffect(() => {
        axios.get('/getalldirectors')
            .then((res: any) => {
                setDirectorlist([...res.data]);
            })
            .catch((error: any) => {
                console.log(error);
            })
    }, [])
    function getname(name: string) {
        setName(name);
    }
    return (
        <Router>
            <div>
                {
                    directorlist.map((director: any) => {
                        return (
                            <ul>
                                <Link to='/directors' onClick={() => { getname(director.DirectorName) }} ><li className="linkwidth">{director.DirectorName}</li></Link>
                            </ul>
                        )
                    })
                }

            </div>
            <Switch>
                <Route path='/directors' children={<Directors name={name} />} />
            </Switch>
        </Router>
    )
})