import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
// import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Hub of exercises at your fingertips</h1>
            <div className="title">
              <img src="./image/check3.png" alt="" />
              Camera-based tracker
            </div>
            <p>
            Accurate and reliable rep counting for more effective workouts.

            </p>
            <div className="title">
              <img src="./image/check3.png" alt="" />
              Motivation
            </div>
            <p>
            Motivation and encouragement through feedback and rewards.

            </p>
            <div className="title">
              <img src="./image/check3.png" alt="" />
              Seamless integration
            </div>
            <p>
            Seamless integration into the website's workout plans and exercises, enhancing the user experience. 
            </p>
            <div className="title">
              <img src="./image/check3.png" alt="" />
              Anonymized community
            </div>
            <p>
            Anonymized community page for users to share their progress and experiences, further enhancing engagement.

            </p>
          </div>
          <div className="item">
            {/* <video src="./img/video.mp4" controls /> */}
            <img src="./image/EXAPMLE.jpeg" />
          </div>
        </div>
      </div>
      {/* <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              FormFlex <i>premium</i>
            </h1>
            <h1>
              A significant solution designed for <i>Wellness enthusiasts</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits
            </p>
            <div className="title">
              <img src="./image/check3.png" alt="" />
              ChatBot
            </div>

            <div className="title">
              <img src="./image/check3.png" alt="" />
              Book an Appointment
            </div>

            <div className="title">
              <img src="./image/check3.png" alt="" />
              Excess to premium trackers
            </div>
            <button>Explore Premium</button>
          </div>
          <div className="item">
            <img
              src="./image/dashboard1.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> */}
    </div>
  );
}

export default Home;