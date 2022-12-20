import React from "react";
import RoboCard from "../card/RoboCard";


const RoboCardList = ({robots}) =>{
    return(
        <div>
            {robots.map(robot => {
                return <RoboCard id={robot.id} name={robot.name} email={robot.email} />;
            })}
        </div>
    );
}

export default RoboCardList;
