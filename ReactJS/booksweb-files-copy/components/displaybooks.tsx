import axios from 'axios';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import {Link} from "react-router-dom";

//  import { ShowBookDetails } from './showbookdetails';

interface Props {
    books?: any
    getId?:any
}

export const DisplayBooks: React.FC<Props> = ({ books,getId }) => {
    
    const deleterow = ((id: number) => {
        console.log(typeof(id));
        
        axios.delete('/books/'+`${id}`,{
            headers: {
                "Content-Type":"application/json",
              'Authorization': "Bearer "+localStorage.getItem("token")
            }
          })  
      .then(res => {  
        console.log(res +"deleted successfuly");  
        location.reload();
      })  
      .catch((error) =>{
          console.log(error);
          
      })
    });
    
    
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
                            <Link to="/bookdescription" onClick={()=>{getId(book.BookId)}}>
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
                            <button className="del" onClick={() => deleterow(book.BookId)}>
                                delete</button>


                        </div>

                    );
                })

            }
           
        </div>
         </div>
       

        
       

    );
}