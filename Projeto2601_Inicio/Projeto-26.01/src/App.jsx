import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Componentes/Home';
import About from './Componentes/About';
import Contact from './Componentes/Contact';

function App() {

  return (
   <div>

    <div>
 <a href="/">Inicio</a>
 <a href="/about">Sobre</a>
 <a href="/contact">Contato</a>
    </div>
  
  <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
      </div>
  );
}
 

export default App;