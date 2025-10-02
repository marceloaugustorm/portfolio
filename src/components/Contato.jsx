import "./Contato.css";
import Cat from "../assets/catcar.jpg"

export const Contato = () =>{
    return(
        <div>

          <div className="wrapper">
    
    
   <div className="contatos">
    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Como entrar  em contato</h1>
      <p className="lead"><i className="bi bi-envelope"></i> Email: Livia@gmail.com</p>
      <p className="lead"><i className="bi bi-telephone"></i> Telefone: (11)00000-0000</p>

      <a href="#">
      <i 
    className="bi bi-instagram botao-instagram-contato"
    style={{ fontSize: "40px"}}
  ></i>
  </a>

    <a href="#">
      <i 
    className="bi bi-whatsapp botao-instagram-contato"
    style={{ fontSize: "40px"}}
  ></i>
  </a>

    </div>



    <img src={Cat} alt="Gato com carro" className="foto" 
    style={{
        "width": "500px"
    }}/>
  
</div>

            </div>
    )
}