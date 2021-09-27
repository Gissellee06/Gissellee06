import React from "react";
import "./navBar.css";

export default class NavBar extends React.Component{
    render(){
        return (
            <header className="header">
                <nav className= "nav">
                    <div> LOS SIMPSONS</div>
                    <ul className="links">
                        <li>
                            <a href="javascript: void(0)">Character</a>
                        </li>
                        <li>
                            <a href="javascript: void(0)">About</a>
                        </li>

                    </ul>
                </nav>
            </header>
        );
    }
}