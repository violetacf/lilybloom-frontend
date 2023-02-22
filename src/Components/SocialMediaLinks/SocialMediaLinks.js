// import './ContactLinks.css';
import InstagramLogo from '../../Images/InstagramLogo.png';
import Telephone from '../../Images/Telephone.png';
import Email from '../../Images/Email.png';
import './SocialMediaLinks.css';

function SocialMediaLinks() {
  return (
    <div className="social-media-container">
      <h2 className="subtitle">You can contact Lilian here:</h2>
      <div className="img-logo-container">
        <img className="links-logo" src={InstagramLogo} alt="Instagram logo" />
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <p>@lilianInstagram</p>
        </a>
      </div>
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
