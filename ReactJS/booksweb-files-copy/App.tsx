// import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect

} from "react-router-dom";
import './components/bookweb.css';
import { AddBook } from './components/addbook';
 import { Books } from './components/books';
import { UserRegistration } from "./components/UserRegistration";
//import React from "react";
import { UserLogin } from "./components/UserLogin";
import { useEffect, useState } from "react";
//import { ShowBookDetails } from "./components/showbookdetails";
function App() {

  const [valid,setValid]=useState("");
  useEffect(() =>{
    if(localStorage.getItem('login')){
    setValid("success");
    }
  },[])
  function handleLogin(value:string){
    if(value ==="Password does not matched" || value==="Invalid Credentials!"){
      setValid('failed');
    }
    else{
      localStorage.setItem("token",value);
      setValid('success');
      <Redirect to="/" />
    }
  }


  return (
    <Router>
      <div className="header">
        <div className="heading">
          <h1>Book's Web</h1>
        </div>
        <div className="pagelinks">
          <Link to="/register" className="link"> Register </Link>
          <Link to="/login" className="link">Login</Link>
          {/* <Link to="#" className="link">Add Author</Link>
          <Link to="#" className="link">Authors</Link> */}
          <Link to="/addbook" className="link">Add Books</Link>
          <Link to="/" className="link">Books</Link>
        </div>
      </div>
      <br />
      <br />
 

  <Switch>

  <Route path="/" exact children={valid ==='success' ?<Books /> :<UserLogin 
         valid={valid} handleLogin={handleLogin}/>} />
  <Route path="/addbook" exact children={valid ==='success' ?<AddBook />:<UserLogin 
  valid={valid} handleLogin={handleLogin} />} />
  <Route path="/register/" exact children={<UserRegistration  />} />
  <Route path="/login" exact children={<UserLogin valid={valid} handleLogin={handleLogin}  />} />

  </Switch>

</Router>


  );



}

export default App;
