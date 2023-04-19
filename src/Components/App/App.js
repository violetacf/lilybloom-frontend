import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import Header from '../Header/Header';
import About from '../About/About';
import NavBar from '../NavBar/NavBar';
import Gallery from '../Gallery/Gallery';
import CreatedBy from '../Created/Created';
import Contact from '../Contact/Contact';
import WhatIDo from '../WhatIDo/WhatIDo';
import Flowers from '../WhatIDo/Flowers/Flowers';
import Workshops from '../WhatIDo/Workshops/Workshops';
import TherapeuticalArts from '../WhatIDo/TherapeuticalArts/TherapeuticalArts';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="whatIDo" element={<WhatIDo />} />
          <Route path="whatIDo/flowers" element={<Flowers />} />
          <Route path="whatIDo/workshops" element={<Workshops />} />
          <Route
            path="whatIDo/therapeutical-arts"
            element={<TherapeuticalArts />}
          />
          {/* <Route path="events" element={<Events />} /> */}
        </Routes>
        <SocialMediaLinks />
      </BrowserRouter>
      <CreatedBy />
    </div>
  );
}

export default App;
