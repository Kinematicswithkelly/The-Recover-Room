
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ValdHub from './pages/ValdHub';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Workshops from './pages/Workshops';
import Mission from './pages/Mission';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vald-hub" element={<ValdHub />} />
            <Route path="/services" element={<Services />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/mission" element={<Mission />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
