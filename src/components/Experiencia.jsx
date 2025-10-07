import React from "react";
import "./Experiencia.css";
import Hidog from "../assets/hidog.webp";
import Mahalo from "../assets/mahalo.webp";
import Animacao from "../assets/animacao.webp";
import WeVets from "../assets/wevets.webp"

export const Experiencia = () => {
  const experiencias = [
    {
      titulo: "Mahalo Experiência / Outro Estágio",
      endereco: "R. Ipurinãs, 294 - Brooklin, São Paulo - SP",
      periodo: "10/08/2022",
      atividades: [
        "Desenvolvimento de habilidades em trabalho em equipe multidisciplinar.",
        "Maior conhecimento em protocolos de emergência e cuidados intensivos veterinários.",
        "Contato direto com a rotina de gestão clínica e relacionamento com tutores.",
      ],
      imagem: Mahalo,
    },

     {
      titulo: "Animacao Experiência / Outro Estágio",
      endereco: "Av. Yervant Kissajikian, 2460 - Vila Joaniza, São Paulo - SP",
      periodo: "20/08/2025",
      atividades: [
        "Desenvolvimento de habilidades em trabalho em equipe multidisciplinar.",
        "Maior conhecimento em protocolos de emergência e cuidados intensivos veterinários.",
        "Contato direto com a rotina de gestão clínica e relacionamento com tutores.",
      ],
      imagem: Animacao,
    },

     {
      titulo: "WeVets Experiência / Outro Estágio",
      endereco: "Av. Washington Luís, 3054 - Santo Amaro, São Paulo - SP",
      periodo: "25/10/2025",
      atividades: [
        "Desenvolvimento de habilidades em trabalho em equipe multidisciplinar.",
        "Maior conhecimento em protocolos de emergência e cuidados intensivos veterinários.",
        "Contato direto com a rotina de gestão clínica e relacionamento com tutores.",
      ],
      imagem: WeVets,
    },
  ];

  return (
    <div className="wrapperexp">
      <div className="linha-central"></div>
      <div className="conteudo-experiencia">
        {experiencias.map((exp, index) => (
          <div className="experiencia-item" key={index}>
            <div className="lado-esquerdo">
              <div className="background">
                <ul>
                  <li>
                    <h4>{exp.titulo}</h4>
                    <ul>
                      <li>
                        <h5>
                          <i className="bi bi-geo-alt"></i> Local: {exp.endereco}
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i className="bi bi-calendar"></i> Período: {exp.periodo}
                        </h5>
                      </li>
                      <li>
                      
                        <h5>Atividades Exercidas</h5>
                        <ul>
                          {exp.atividades.map((atividade, i) => (
                            <li key={i}>
                              <p>{atividade}</p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lado-direito">
              <img
                src={exp.imagem}
                alt={exp.titulo}
                className="imagem-experiencia"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
