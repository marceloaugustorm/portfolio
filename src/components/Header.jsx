import "./Header.css";
import {Link} from "react-router-dom"

export const Header = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/"  className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            
            <a href="#experiencia" className="nav-link">Experiência</a>
          </li>
          <li className="nav-item">
            <a href="#sobre" className="nav-link">Sobre Mim</a>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link"> Contato </Link>
          </li>
            <li className="nav-item">
            <a href="#contato" className="nav-link ">Adicionar caso</a>
          </li>
        </ul>
      </header>
    </div>
  );
};