import React from "react";
import "./assessment.css";
import landingImage from "./images/image.png";
import lockIcon from "./images/icon.png";
import reload from "./images/reload.png";
const Assessment = () => {
  return (
    <div>
      <div className="container">
        <h1 className="imagine-content">
          Imagine if <span>Snapchat</span> had events
        </h1>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
        <img className="image" src={landingImage}></img>
        <div>
          <button>🎉 Create my event</button>
        </div>
      </div>
      <div className="url-bar">
        <h1>
          <span>A</span>A
        </h1>
        <p>
          <span>
            <img src={lockIcon}></img>
          </span>
          domain.com
        </p>
        <img className="reload" src={reload}></img>
      </div>
    </div>
  );
};
export default Assessment;
