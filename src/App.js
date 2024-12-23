import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import BookNowPage from './pages/Book-Now';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/book-now" element={<BookNowPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services/:id" element={<ServiceDetailsPage />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
