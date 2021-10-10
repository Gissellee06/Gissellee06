
import './App.css';
import React, {useState, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import NavBar from "./component/navBar/navBar";
import Home from "./component/home/home";
import About from "./component/about/about";
import CharacterDetail from "./component/characterDetail/characterDetail";
import Personaje from "./datos/datos.json";
import Character from "./datos/datos.json";
import {Switch, Route} from "react-router-dom";



 function App(){
  const[characterInfo, setCharacterInfo]= useState([]);
  useEffect(()=> {
    setCharacterInfo(Personaje.CharacterDetail);
  },[]);

  return(
    <>
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

      <Route path="/about">
        <About />
      </Route>

      <Route>
          <h1> ERROR 404 NOT FOUND </h1>
      </Route>
    </Switch>
    </>
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
}*/

export default  App; 
 