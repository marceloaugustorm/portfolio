import "./Contato.css";
import Cat from "../assets/catcar.jpg"


export const Contato = () =>{
    return(
        <div>

          <div className="wrappercont">
    
    
   <div className="contatos">
    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Como entrar  em contato</h1>
    <h2 className="lead sub">Sempre disponível… exceto quando tem um gato dormindo no colo</h2>
    <div className="numero">
      <p className="lead cont"><i className="bi bi-envelope"></i> Email: Livia@gmail.com</p>
      <p className="lead cont"><i className="bi bi-telephone"></i> Telefone: (11)00000-0000</p>
    
      </div>

      <div className="links">
      <a href="https://www.instagram.com/_livitt?utm_source=ig_web_button_share_sheet&igsh=ZzVnc2Vxd3FtOHl5">
      <i 
    className="bi bi-instagram botao-instagram-contato"
    style={{ fontSize: "40px"}}
  ></i>
  </a>

    <a href="https://wa.me/5511992164519?text=Olá%20tudo%20bem?%20Vim%20pelo%20site!">
      <i 
    className="bi bi-whatsapp botao-instagram-contato"
    style={{ fontSize: "40px"}}
  ></i>
  </a>
  </div>
  

    </div>



    <img src={Cat} alt="Gato com carro" className="foto" 
    style={{
        "width": "500px"
    }}/>
  
</div>

            </div>
    )
}