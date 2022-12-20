import React from "react";
import "./RoboCard.css";

const RoboCard = ({id,name,email}) =>{
    return(
        <div className="robot">
            <div className="img">
                <img src={`https://robohash.org/${id}?200x200`} alt="Robo" />
            </div>
            <div className="h2">
                <h2>{name}</h2>
            </div>
            <div className="p">
                <p>{email}</p>
            </div>
        </div>
    );
}

export default RoboCard;