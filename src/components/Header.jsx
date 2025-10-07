// Header.jsx
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container-header">
      <header className="header d-flex justify-content-center py-3">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/experiencia" className="nav-link">Experiência</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link">Sobre Mim</Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link">Contato</Link>
          </li>
          <li className="nav-item">
            <Link to="/caso" className="nav-link">Adicionar Caso</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
