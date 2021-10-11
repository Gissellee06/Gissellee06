import React from "react";
import "./navBar.css";
import { Link} from "react-router-dom";

 export default class NavBar extends React.Component{

    render() {
        return (
      <nav class="navbar navbar-expand-lg navbar-light bg-warning ">
      <a class="navbar-brand" href="#">LINK</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" exact to="/" > ONE PUNCH </Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" exact to="/characterDetail" > CHARACTERDETAIL </Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" exact to="/about" > ACERCA </Link>
         </li>
         
        </ul>
      </div>
    </nav>
         
        );
      }
    
    }



  /*  constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <header className="header">
                <nav className= "nav">
                    <div>
                   <navLink className="Link" exact to="/"> Mi personaje favorito
                   </navLink> 
                   </div>
                   <ul className="ul">
                     <li>   
                       <navLink className="link" exact to="/characterDetail" > </navLink>
                     </li>
                   <li>   
                       <navLink to="/about" exact className="link" > ACERCA </navLink>
                   </li>
                   </ul>
                </nav>
                </header>
        );
    }  */ 


