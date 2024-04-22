import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Get In Touch</h2>
            
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>FlexForm</h2>
            <span>© 2024</span>
            <span>Home</span>
            <span>About</span>
            <span>Exercise</span>
            <span>Premium</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/image/twitter1.png" alt="" />
              <img src="/image/facebook1.png" alt="" />
              <img src="/image/linkedin.png" alt="" />
              
              <img src="/image/instagram.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;