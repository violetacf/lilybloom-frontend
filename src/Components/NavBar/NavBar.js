import './NavBar.css';
import About from '../About/About';

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-buttons-container">
        <a href="/">
          {' '}
          <button className="navbar-button"> About </button>
        </a>
        <a href="/gallery">
          {' '}
          <button className="navbar-button"> Gallery </button>
        </a>
        {/* <a href="/events">
          {' '}
          <button className="navbar-button"> Events </button>
        </a> */}
      </div>
    </div>
  );
}
