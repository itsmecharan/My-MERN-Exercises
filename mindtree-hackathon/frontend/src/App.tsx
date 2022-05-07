
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './components2/movieweb.css'
import { Directors } from './components2/Directors';
import { MovieList } from './components2/movielist';
import { DirectorsList } from './components2/DirectorsList';
import { AddMovies } from './components2/AddMovies';
import { AddDirector } from "./components2/adddirector";
function App() {

  return (
    <Router>



      <div className="header">
        <div className="header-right">
          <Link to="/movielist" className="active"> Movies </Link>
          <Link to="/" className="active">DirectorsList</Link>
          <Link to="/addmovies" className="active">Add Movies</Link>
          <Link to="/adddirector" className="active">Add Director</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/" children={<DirectorsList />} />
        <Route path="/movielist" children={<MovieList />} />

        <Route path='/addmovies' children={<AddMovies />} />
        <Route path='/adddirector' children={<AddDirector />} />
      </Switch>
    </Router>


  );



}

export default App;

