import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./index.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header";
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Areas } from './components/Areas';
import { Contato } from './components/Contato'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato/>} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
