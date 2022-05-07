/* eslint @typescript-eslint/no-var-requires: "off" */
import React, { useState } from 'react';
import { Search } from './search';
import { DisplayBooks } from './displaybooks';
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
     Switch,
     Route,
  } from "react-router-dom";
// import { Getbooks } from './getbooks';
 import axios from 'axios';
import { ShowBookDetails } from './showbookdetails';


interface Props {
    bookdetails?: any
}
export const Books: React.FC<Props> = (() => {

    // console.log(typeof (bookdetails));

    const [searchedbooks, setSearchedbooks] = useState();
    const [books, setBooks] = useState(Array);
    const [screen, setScreen] = useState('list');
     const[message,setMessage] = useState('');
     const[id,setId] = useState('');
    
    useEffect(() => {
        axios.get('/books',{
            headers: {
                "Content-Type":"application/json",
              'Authorization': "Bearer "+localStorage.getItem("token")
            }
          })
            .then(res => {
                setBooks([...res.data]);
            })
            .catch((error) => {
                console.log(error);
                setScreen('notfound');
                setMessage(error.response.data.message);

            })
        
    }, []);
    function SearchedBooks(searchedbooks: any) {
        if (searchedbooks.length !== 0) {
            setSearchedbooks(searchedbooks);
            setScreen('searchedbooks');
        }
        else{
            setScreen('notfound');
            setMessage('Not Found');
        }
       
    }
    function getId(Id:string){
        setId(Id);
        setScreen('description');
        console.log(Id);
        
    }




    return (
        <Router>
        <div className="book">
            <Search SearchedBooks={SearchedBooks} />
            <br />
            <label
                className="Booksheading">Books
            </label>
 ______________________________________________________________________________________________________________________________________



            { (screen === 'list') ?


                <DisplayBooks books={books} getId={getId} />

                : null
            }
            { (screen === 'searchedbooks') ?
                <DisplayBooks books={searchedbooks} getId={getId}/>
                :
               null

            }
            
                <br/>
                <div className="booklistmsg">
                    {
                (screen === 'notfound' && message !== '') ?
               
                message
                :
                null
                    }
                    </div>
                
            
           
           
        </div>

        <Switch>
        <Route path="/bookdescription" exact children={ screen== 'description' ?
        <ShowBookDetails bookid={id}/> :null  }/>
    </Switch>
    </Router>
    );




})