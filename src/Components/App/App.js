import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//Import components here
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import Header from '../Header/Header';
import About from '../About/About';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="portfolio" element={<Gallery />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <SocialMediaLinks />
      </BrowserRouter>
    </div>
  );
}

export default App;
