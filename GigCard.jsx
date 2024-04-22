import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="https://youtu.be/azAbBYeIPKs?si=Xgx_V4yECFBhEP5C" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          
        </div>
        
      </div>
    </Link>
  );
};

export default GigCard;