
import './App.css';
import NavBar from "./component/navBar/navBar";
import Home from "./component/home/home";
import About from "./component/about/about";
import CharacterDetail from "./component/characterDetail/characterDetail";


function App(){
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
 