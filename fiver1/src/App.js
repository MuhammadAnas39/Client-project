import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import axios from 'axios';

// Import placeholder components for new routes
const Toys = () => <div className="container mx-auto mt-4 p-4"><h1 className="text-4xl font-bold mb-4">Toys</h1><p>Toys page content will go here.</p></div>;
const SoftPlay = () => <div className="container mx-auto mt-4 p-4"><h1 className="text-4xl font-bold mb-4">Soft Play Equipment</h1><p>Soft Play Equipment page content will go here.</p></div>;
const Trampoline = () => <div className="container mx-auto mt-4 p-4"><h1 className="text-4xl font-bold mb-4">Trampoline</h1><p>Trampoline page content will go here.</p></div>;
const SchoolFurniture = () => <div className="container mx-auto mt-4 p-4"><h1 className="text-4xl font-bold mb-4">School Furniture</h1><p>School Furniture page content will go here.</p></div>;
const Exhibitions = () => <div className="container mx-auto mt-4 p-4"><h1 className="text-4xl font-bold mb-4">Exhibitions</h1><p>Exhibitions page content will go here.</p></div>;
const Achievements = () => <div className="container mx-auto mt-4 p-4"><h1 className="text-4xl font-bold mb-4">Achievements</h1><p>Achievements page content will go here.</p></div>;
const NewArrivals = () => <div className="container mx-auto mt-4 p-4"><h1 className="text-4xl font-bold mb-4">New Arrivals</h1><p>New Arrivals page content will go here.</p></div>;

function App() {

  useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://localhost:5000"}`)
    .then(res => {
      console.log(res.data); // Hello World!
    })
    .catch(err => {
      console.error(err);
    });
}, []);

  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            
            {/* New routes based on playschooltoy.com navigation */}
            <Route path="/toys" element={<Toys />} />
            <Route path="/soft-play" element={<SoftPlay />} />
            <Route path="/trampoline" element={<Trampoline />} />
            <Route path="/school-furniture" element={<SchoolFurniture />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;