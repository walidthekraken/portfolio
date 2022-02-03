import React from "react";

export const Project = (props) => {
    return(

        <div className="project">
        
            <h3>{props.name}</h3>
            <img src={props.logo} alt="logo"></img>
            <br></br>
            <p>{props.description}</p>
        </div>

    );
}