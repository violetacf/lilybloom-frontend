// import './ContactLinks.css';
import InstagramLogo from '../../Images/InstagramLogo.png';
import Telephone from '../../Images/Telephone.png';
import Email from '../../Images/Email.png';
import Where from '../../Images/Where.png';
import ButtonMailto from './ContactForm';
import './SocialMediaLinks.css';

function SocialMediaLinks() {
  return (
    <div className="social-media-container">
      <div className="img-logo-container">
        <img className="links-logo" src={InstagramLogo} alt="Instagram logo" />
        <a
          href="https://www.instagram.com/lilybloomfloral/?hl=en-gb"
          target="_blank"
          rel="noreferrer"
        >
          @lilybloomfloral
        </a>
      </div>
      <div className="img-logo-container">
        <img className="links-logo" src={Telephone} alt="Telephone logo" />
        <a href="tel:+457396839582">+457396839582</a>
      </div>
      <div className="img-logo-container">
        <img className="links-logo" src={Email} alt="Email logo" />
        <ButtonMailto
          label="lilian@email.com"
          mailto="mailto:lilian@email.com"
        />
      </div>
      <div className="img-logo-container">
        <img className="links-logo" src={Where} alt="Where logo" />
        <a
          href="https://www.google.com/maps/place/Bristol/@51.4684055,-2.7308006,11z/data=!3m1!4b1!4m5!3m4!1s0x4871836681b3d861:0x8ee4b22e4b9ad71f!8m2!3d51.454513!4d-2.58791"
          target="_blank"
          rel="noreferrer"
        >
          Bristol, UK
        </a>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
