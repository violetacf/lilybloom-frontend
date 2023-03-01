import LilyBloomLogo from '../../Images/LilyBloomLogo.png';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <img src={LilyBloomLogo} alt="Lilian logo"></img>
    </div>
  );
}

export default Header;
