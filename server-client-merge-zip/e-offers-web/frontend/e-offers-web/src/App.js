import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {useState} from 'react';
//import {Sample} from './components/sample';
import Navbar from './components/navbar';
import Addoffer from './components/addoffer';
import Contactadmin from './components/contactadmin';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import Offerdescription from './components/offerdescription';
function App() {
  const [offerid, setOfferid] = useState(String);
  const getId=(id)=>{
    setOfferid(id)
  }
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Switch>
      <Route exact path="/"><Home getId={getId}/></Route>
      <Route exact path="/addoffers"> 
      <Addoffer />
      </Route>
      <Route exact path="/contactadmin"><Contactadmin /></Route>
      <Route exact path="/register"><Register /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route path="/offerdescription"><Offerdescription id={offerid}/></Route>

    </Switch>
    </Router>
  );
}

export default App;
