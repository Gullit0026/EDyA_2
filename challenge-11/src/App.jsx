import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteProvider } from './context/RouteContext';
import NavComponent from './components/NavComponent';
import './styles/NavComponent.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouteProvider>
        <Router>
          <NavComponent />
          <div className="AppRouter">
            <Routes>
              <Route path="/" element={<div>Página de Inicio</div>} />
              <Route path="/about" element={<div>Página de Acerca de</div>} />
              <Route path="/services" element={<div>Página de Servicios</div>} />
              <Route path="/contact" element={<div>Página de Contacto</div>} />
            </Routes>
          </div>
        </Router>
      </RouteProvider>
    </div>
  );
}

export default App;