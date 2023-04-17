import './NavBar.css';

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
        {/* <a href="/whatIDo">
          {' '}
          <button className="navbar-button"> What I Do </button>
        </a> */}
        <a href="/contact">
          {' '}
          <button className="navbar-button"> Contact </button>
        </a>

        {/* <a href="/events">
          {' '}
          <button className="navbar-button"> Events </button>
        </a> */}
      </div>
    </div>
  );
}
