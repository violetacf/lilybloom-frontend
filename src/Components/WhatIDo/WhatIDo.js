import './WhatIDo.css';
import flowers from './../../Images/PicturesDisplayed/picture1.jpg';
import workshop from './../../Images/PicturesDisplayed/workshop.webp';
import therapeuticArts from './../../Images/PicturesDisplayed/picture2.JPG';
export default function WhatIDo() {
  return (
    <>
      <div className="display-work">
        <div className="image-wrap">
          <img className="image-work" src={flowers} alt="Flowers work"></img>
          <p className="image-description">Flowers</p>
        </div>

        <div className="image-wrap">
          <img className="image-work" src={workshop} alt="Workshops"></img>
          <p className="image-description">Workshops</p>
        </div>

        <div className="image-wrap">
          <img
            className="image-work"
            src={therapeuticArts}
            alt="Therapeutical Arts"
          ></img>
          <p className="image-description">Therapeutical Arts</p>
        </div>
      </div>
    </>
  );
}
