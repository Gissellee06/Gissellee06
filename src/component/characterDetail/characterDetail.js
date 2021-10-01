import React, { useEffect, useState } from "react";
import datos from "../../datos/datos.json";
import "./characterDetail.css";
import {useParams} from "react-router";

export default function CharacterDetail (props){
    const parametro = useParams();
    const [state, setState] = useState({
        detallePersonaje: props.characterInfo[0],
    });

    useEffect(()=> {
        if (Object.keys(parametro).length !== 0){
            setState({ detallePersonaje: props.characterInfo[parametro.id]});

        }else{
            setState({ detallePersonaje:props.characterInfo[0]});
        }
    } , [parametro]);

    const showDescription = (e) => {

        setState({
            detallePersonaje: props.characterInfo.find((Element)=> Element.id === parseInt(e.target.value)
            ),
        });
    };

    return (
        <div>
          {Object.keys(parametro).length === 0 && (
            <select name="personajes" onChange={(e) => showDescription(e)}>
              {props.charactersInfo.map((character, index) => {
                return (
                  <option
                    key={index}
                    value={character.id}
                    selected={character.id === state.detallePersonaje?.id}
                  >{`${character.name} ${character.lastname}`}</option>
                );
              })}
            </select>
          )}
          <div>
            <h2>{`${state.detallePersonaje?.name} ${state.detallePersonaje?.lastname}`}</h2>
            <img src={state.detallePersonaje?.image} alt="image" />
            <p>
              {`vive ${state.detallePersonaje?.city}, tiene ${state.detallePersonaje?.age} años`}
            </p>
            
          </div>
        </div>
      );
    }


    
   
