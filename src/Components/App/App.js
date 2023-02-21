import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//Import components here

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          {/* <Route path="/" element={<About />} /> */}
          {/* <Route path="portfolio" element={<Gallery />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
