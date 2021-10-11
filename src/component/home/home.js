import React from "react";
import datos from "../../datos/datos.json"
import Card from "../characterDetail/card";
import CharacterDetail from "../characterDetail/characterDetail";
import "./home.css";
import {Link} from "react-router-dom"; 



export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <div className="home">
                {this.props.characterInfo.map((character, index) => {
                    return(
                        <Link key={index} to={'/charDetail/${character.id}'}>
                            <CharacterDetail
                            image={character.image}
                            name={'${character.name} ${character.lastname}'} />
                        </Link>
                    );
                })}
            </div>
        );
    }
}
