import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import ServicesPage from './pages/servicespage';
import EventsPage from './pages/eventspage';
import BlogPage from './pages/blogpage';
import ContactPage from './pages/contactpage';

const App = () => {
  return (
    <Router basename="/showdown-quiz">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;