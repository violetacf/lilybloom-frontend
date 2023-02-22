import LilLogo from '../../Images/LilLogo.jpg';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <img src={LilLogo} alt="Lilian logo"></img>
    </div>
  );
}

export default Header;
