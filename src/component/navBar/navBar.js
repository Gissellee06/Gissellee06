import React from "react";
import "./navBar.css";
import { Link} from "react-router-dom";

 class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            
                <nav className= "nav">
                   <h1>   
                       <navLink exact to="/" activeClassName="activo"> Mi personaje favorito</navLink>
                   </h1>
                   <p>   
                       <navLink exact to="/characterDetail" activeClassName="activo"> CHARACTER DETAIL</navLink>
                   </p>
                   <p>   
                       <navLink exact to="/about" activeClassName="activo"> ACERCA </navLink>
                   </p>
                </nav>
          
        );
    }
}

export default NavBar;