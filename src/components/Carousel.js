import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const fadeImages = [
  "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  
];

export default function Carousel () {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} height="500px" width="100%"/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} height="500px" width="100%" />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} height="500px" width="100%"/>
        </div>
      </Fade>
    </div>
  );
}

