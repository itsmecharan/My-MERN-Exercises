import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Search } from './components/search';
import './components/bookweb.css';
import { AddBook } from './components/addbook';
import { Books } from './components/books';
import { UserRegistration } from "./components/UserRegistration";
import { UserLogin } from "./components/UserLogin";
import BookContextProvider from "./contexts/BookContext";
import { ShowBookDetails } from "./components/showbookdetails";
import { DisplaySearchedBooks } from './components/displaysearchedbooks';
import Carousel from './components/carousel';
function App() {

  return (
    <Router >
      <BookContextProvider>
        <div className="header">
          <div className="heading">
            <h1>Book's Web</h1>
          </div>
          <div className="pagelinks">
            <Search />
            <Link to="/register" className="link"> Register </Link>
            <Link to="/login" className="link">Login</Link>
            <Link to="/addbook" className="link">Add Books</Link>
            <Link to="/books" className="link" >Books</Link>

          </div>
        </div>
        <br />
        <br />


        <Switch>
          <div>
            <Route exact path="/" children={<Carousel />} />
            <Route exact path="/books" children={<Books />} />
            <Route path="/addbook" children={<AddBook />} />
            <Route path="/register/" children={<UserRegistration />} />
            <Route path="/login" children={<UserLogin />} />
            <Route path="/displaysearchedbooks" exact children={<DisplaySearchedBooks />} />
            <Route path="/bookdescription" exact children={<ShowBookDetails />} />

          </div>
        </Switch>

      </BookContextProvider>

    </Router>


  );



}

export default App;



















