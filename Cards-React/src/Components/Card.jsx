import React from "react";
const Card = (Props) => {
  return (
    

    <div className="parent">
      <div className="cards">
        <img src={Props.profile} alt="" />
        <h3>{Props.name}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          modi!
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
