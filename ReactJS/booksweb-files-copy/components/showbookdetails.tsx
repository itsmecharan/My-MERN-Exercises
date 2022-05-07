import axios from 'axios';
import React, { 
     useState,
    useEffect } from 'react';
interface props{
    bookid:string
}
export const ShowBookDetails:React.FC<props> =({bookid})=>{
    
     const [book,setBook]=useState(Array);
    useEffect(()=>{
        axios.get(`/books/${bookid}`,{
            headers: {
                "Content-Type":"application/json",
              'Authorization': "Bearer "+localStorage.getItem("token")
            }
          })
        .then((res:any)=> {
            if(res){
             setBook(res.data);
            console.log(res.data);
            
            }
        })
        .catch((error:any) => {
            if(error){
            console.log(error.response.data.message);
            }     
        })
    })
    
    const style = {

        display: 'inline-flex'
    }
    return(
        <div>
            {
            book.map((data:any)=>{
                return( 
                <div style={style}>
                    <div className="descimage">
                <img src={data.BookCover} width="500" height="500"/>
                </div>
                <div className="desc">
                <b>Book Title:</b>{data.BookTitle} <br />
                <b>Book Id:</b>{data.BookId} <br />
                <b>Book Author:</b>{data.BookAuthor} <br />
                <b>Book rating:</b>{data.BookRating} <br />
                <b>Book Price:</b>{data.BookPrice} <br />
                <b>Book Description:</b>{data.BookDescription} <br />
                </div>
                </div>
             

                )
                
                
            })
        } 
       
    
           
        </div>
    );
}