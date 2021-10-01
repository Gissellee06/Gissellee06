import React from "react";
import "./card.css";

export default function Character (props){
    return(
        <div>
            <img src={props.image} alt="image" />
            <h3>{props.name}</h3>
        </div>
    )
}
 
/*}

    render(){
        return(
            <div className="card">
                <div>
                    <img src={this.props.images}></img>
                </div>
                <div className="name">{this.props.name}</div>
            </div>
        );

    }
}*/