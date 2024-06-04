import React from "react";
import nextbutton from "../Assets/Nextbutton.svg";
import "./Match.css";

const Match = () =>{

    
    return(
        <div className="blackground">
        <div className="its_match">
        it's a match !
        </div>
        <div>
        <img src={nextbutton} alt='button' className="yellowbutton" />
        </div>
        </div>
    )
}

export default Match;