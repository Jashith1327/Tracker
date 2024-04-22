import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>exercise</span> for you.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./image/search.png" alt="" />
              <input type="text" placeholder='Try "arm curls"' />
            </div>
            <button>Explore</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Reps</button>
            <button>Arm curls</button>
            <button>High Knee</button>
            <button>Meal Plan</button>
          </div>
        </div>
        <div className="right">
          <img src="./image/curls-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;