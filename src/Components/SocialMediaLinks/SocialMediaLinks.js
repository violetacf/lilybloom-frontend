// import './ContactLinks.css';
import InstagramLogo from '../../Images/InstagramLogo.png';
import Telephone from '../../Images/Telephone.png';
import Email from '../../Images/Email.png';

function SocialMediaLinks() {
  return (
    <div className="social-media-container">
      <div className="contact-container">
        <h2 className="subtitle">You can contact Lilian here:</h2>
      </div>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <div className="img-logo-container">
          <img
            className="links-logo"
            src={InstagramLogo}
            alt="Instagram logo"
          />
          <p>@lilianInstagram</p>
        </div>
      </a>
      <div className="img-logo-container">
        <img className="links-logo" src={Telephone} alt="Telephone logo" />
        <p>4835734876346495 number</p>
      </div>
      <div className="img-logo-container">
        <img className="links-logo" src={Email} alt="Email logo" />
        <p>lilian@email.com</p>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
