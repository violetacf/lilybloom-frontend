import './WhatIDo.css';
import flowers from './../../Images/PicturesDisplayed/picture1.jpg';
import workshops from './../../Images/PicturesDisplayed/workshop.webp';
import therapeuticArts from './../../Images/PicturesDisplayed/picture2.JPG';

export default function WhatIDo() {
  return (
    <>
      <div className="display-work">
        <div className="image-container">
          <a href="/flowers">
            <img src={flowers} alt="Avatar" className="image" />
            <div className="overlay">
              <div className="text">Flowers</div>
            </div>
          </a>
        </div>

        <div className="image-container">
          <a href="/workshops">
            <img src={workshops} alt="Avatar" className="image" />
            <div className="overlay">
              <div className="text">Workshops</div>
            </div>
          </a>
        </div>

        <div class="image-container">
          <a href="/therapeutical-arts">
            <img src={therapeuticArts} alt="Avatar" className="image" />
            <div className="overlay">
              <div className="text">Therapeutic Arts</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
