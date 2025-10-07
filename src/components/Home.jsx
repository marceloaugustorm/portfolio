import "./Home.css"
import {Areas} from "./Areas"
import Picture from "../assets/imagem4.jpg"
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container py-5 px-5">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={Picture}
            className="home-picture d-block mx-lg-auto img-fluid rounded shadow"
            alt="Veterinária"
            loading="lazy"
            style={{height: "550px"}}
          />
        </div>

        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Olá, eu sou a Lívia
          </h1>
          <p className="lead">
            Estudante de Medicina Veterinária apaixonada pelo bem-estar animal. 
            Dedicada a desenvolver habilidades em clínica, cirurgia e cuidados 
            preventivos, buscando sempre oferecer o melhor atendimento aos animais 
            e seus tutores.
          </p>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
            to="/experiencia"
        
              type="button"
              className="btn btn-dark btn-lg px-4 me-md-2"
            >
              Ver Experiência
            </Link>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Currículo
            </button>

            
          </div>
          
        </div>
        <Areas/>
      </div>
    </div>
  );
};