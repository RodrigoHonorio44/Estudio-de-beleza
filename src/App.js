
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Curso from './pages/Curso/Curso';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curso" element={<Curso />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
