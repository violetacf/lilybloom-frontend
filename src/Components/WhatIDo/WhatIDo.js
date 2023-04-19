import './WhatIDo.css';
import flowers from './../../Images/PicturesDisplayed/picture1.jpg';
import workshop from './../../Images/PicturesDisplayed/workshop.webp';
import therapeuticArts from './../../Images/PicturesDisplayed/picture2.JPG';

export default function WhatIDo() {
  return (
    <>
      <div className="display-work">
        <div className="image-container">
          <img src={flowers} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Flowers</div>
          </div>
        </div>
        <div className="image-container">
          <img src={workshop} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Workshops</div>
          </div>
        </div>
        <div class="image-container">
          <img src={therapeuticArts} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Therapeutic Arts</div>
          </div>
        </div>
      </div>
    </>
  );
}
