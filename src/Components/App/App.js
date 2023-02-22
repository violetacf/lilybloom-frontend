import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import Header from '../Header/Header';
import About from '../About/About';
import NavBar from '../NavBar/NavBar';
import Gallery from '../Gallery/Gallery';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          {/* <Route path="events" element={<Events />} /> */}
        </Routes>
        <SocialMediaLinks />
      </BrowserRouter>
    </div>
  );
}

export default App;
