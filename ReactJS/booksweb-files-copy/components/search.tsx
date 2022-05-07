import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios';

interface Props {

    SearchedBooks?: any;

}
export const Search: React.FC<Props> = ({ SearchedBooks}) => {

    const [selectedvalue, setSelectedvalue] = useState('idsearch');
    const [inputvalue, setInputvalue] = useState(String);
    const [minvalue, setMinvalue] = useState(Number);
    const [maxvalue, setMaxvalue] = useState(Number);
     const [message,setMessage] = useState('');

    const options = [
        {
            label: "ID Search",
            value: "idsearch",
        },
        {
            label: "Title Search",
            value: "titlesearch",
        },
        {
            label: "Book By Author",
            value: "bookbyauthor",
        },
        {
            label: "Min Rating",
            value: "minrating",
        },

        {
            label: "Price Range",
            value: "pricerange"
        }

    ];
    const handleChange = ((e: any) => {

        setSelectedvalue(e.target.value);

    });
    const updateInput = ((e: any) => {
        setInputvalue(e.target.value);
    })
    const search = (() => {
        //let searchedbooks: any = [];

        if (inputvalue != "") {

            if (selectedvalue === "idsearch") {
                axios.get(`/books/${inputvalue}`,{
                    headers: {
                        "Content-Type":"application/json",
                      'Authorization': "Bearer "+localStorage.getItem("token")
                    }
                  })
                .then((res:any)=> {
                    if(res){
                    SearchedBooks([...res.data]);
                   setMessage('');
                    }
                })
                .catch((error:any) => {
                    if(error){
                    console.log(error.response.data.message);
                    setMessage(error.response.data.message);
                    SearchedBooks([]);
                    }     
                })
            }
            if (selectedvalue === "titlesearch") {
                axios.get(`/books/${selectedvalue}/${inputvalue}`,{
                    headers: {
                        "Content-Type":"application/json",
                      'Authorization': "Bearer "+localStorage.getItem("token")
                    }
                  })
                .then(res => {
                    SearchedBooks([...res.data]);
                    setMessage('');
                })
                .catch((error) => {
                    if(error){
                    console.log(error);
                    setMessage(error.response.data.message);

                    }

                   

                })
            }
            if (selectedvalue === "bookbyauthor") {
              
                axios.get(`/books/by/${inputvalue}`,{
                    headers: {
                        "Content-Type":"application/json",
                      'Authorization': "Bearer "+localStorage.getItem("token")
                    }
                  })
                .then(res => {
                    SearchedBooks([...res.data]);
                    setMessage('');
                   
                })
                .catch((error) => {
                    if(error){
                    console.log(error);
                    setMessage(error.response.data.message);
                   

                    }
                   

                })

            }
            if (selectedvalue === "minrating") {
                axios.get(`/books/with-minimum-rating/${inputvalue}`,{
                    headers: {
                        "Content-Type":"application/json",
                      'Authorization': "Bearer "+localStorage.getItem("token")
                    }
                  })
                .then(res => {
                    SearchedBooks([...res.data]);
                    setMessage('');
                    
                })
                .catch((error) => {
                    if(error){
                    console.log(error);
                    setMessage(error.response.data.message);
                     
                    }
                })
            }
        }
            if(selectedvalue === "pricerange"){
                if (minvalue !== null && maxvalue !== null) {
                    axios.get(`/books/priced/${minvalue}/${maxvalue}`,{
                        headers: {
                            "Content-Type":"application/json",
                          'Authorization': "Bearer "+localStorage.getItem("token")
                        }
                      })
                        .then(res => {
                            SearchedBooks([...res.data]);
                            setMessage('');
                            
                        })
                        .catch((error) => {
                            if(error){
                            console.log(error);
                            setMessage(error.response.data.message);
                            }
                        })
        
                }
            }

        
        
        setInputvalue('');

    })

    
    const style = {

        display: 'inline'
    }



    return (

        <div className="search">
            Search Books
            <select value={selectedvalue} onChange={handleChange} className="selectbox">
                {options.map((option) => (
                    <option value={option.value} className="options">{option.label}</option>
                ))}
            </select>

            { (selectedvalue == "pricerange") ?
                <div style={style}>
                    <input type="number" placeholder="min"
                        min="5" className="mininput" onChange={(e: any) => setMinvalue(e.target.value)} />
                    <input type="number" placeholder="max"
                        max="10000" className="maxinput" onChange={(e: any) => setMaxvalue(e.target.value)} />
                </div>
                :
                <input type="text" placeholder="Title/Author/Price..." className="searchtxt"
                   value={inputvalue} onChange={updateInput} />
            }



            <button className="searchbtn" type="button" onClick={() =>
                search()}>
                <SearchIcon />
            </button>

            {
                message !=='' ?
                message:
                null
            }
            
        </div>

    );
}


