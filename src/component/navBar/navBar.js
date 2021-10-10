import React from "react";
import "./navBar.css";
import { Link} from "react-router-dom";

 export default class NavBar extends React.Component{
  /*  constructor(props){
        super(props);
        this.state = {};
    }*/
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
    }
}

export default NavBar;