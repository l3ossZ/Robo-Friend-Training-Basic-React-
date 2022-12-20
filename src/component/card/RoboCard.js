import React from "react";
import "./RoboCard.css";

const RoboCard = ({id,name,email}) =>{
    return(
        <div className="robot">
            <div>
                <img src={`https://robohash.org/${id}?200x200`} alt="Robo" />
            </div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default RoboCard;