import './App.css';
import {useState, useEffect} from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import NavBar from "./component/navBar/navBar";
import Home from "./component/home/home";
import About from "./component/about/about";
import CharacterDetail from "./component/characterDetail/characterDetail";
import Personaje from "./datos/datos.json";
import Formulario from './component/formulario/formulario';


 export default function App(){
  const[characterInfo, setCharacterInfo]= useState([]);
  useEffect(()=> {
    setCharacterInfo(Personaje.CharacterDetail);
  },[]);

  return(
    <div className="App">
      <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home characterInfo={characterInfo} />
      </Route>

      <Route exact path="/charDetail">
        <CharacterDetail characterInfo={characterInfo} />
      </Route>

      <Route path="/chararDetail/:id">
        <CharacterDetail characterInfo={characterInfo} />
      </Route>

      <Route exact path="/about">
        <About />
      </Route> 

      <Route>
          <h1> ERROR 404 NOT FOUND </h1>
      </Route>
    </Switch>
    </Router>
    </div>
  );
  
}

/* function App(){
  return(
    <div>
      <NavBar/>
      <Home/>
      <CharacterDetail/>
      <About/>
    </div>
  );
}

export default  App; 
 */