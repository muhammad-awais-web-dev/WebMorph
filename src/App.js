import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import HeroSection from './components/Hero';
import AboutHome from './components/AboutHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function Home(){
//   return <h1>Welcome to my portfolio</h1>
// }
function About(){
  return <h1>About Me</h1>
}
function Projects(){
  return <h1>Projects</h1>
}
function Certifications(){
  return <h1>Certifications</h1>
}
function Services(){
  return <h1>Services</h1>
}
function Testimonials(){
  return <h1>Testimonials</h1>
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/about' element={< About/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/services' element={<Services />} />
        <Route path='/testimonials' element={<Testimonials />} />        
      </Routes>
      <AboutHome />
      <Contact />
    </Router>
  );
}

export default App;
