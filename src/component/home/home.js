import React from "react";
import datos from "../../datos/datos.json"
import Card from "../characterDetail/card";
import CharacterDetail from "../characterDetail/characterDetail";
import Character from "../character/character";
import Character from "../characterDetail/card"; 
import "./home.css";
import {Link} from "react-router-dom";


 class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
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
export default Home;