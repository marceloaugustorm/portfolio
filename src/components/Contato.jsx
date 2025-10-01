import "./Contato.css";
import Cat from "../assets/catcar.jpg"

export const Contato = () =>{
    return(
        <div>

          <div className="wrapper">
    
    
   <div className="contatos">
    <h1>Como entrar em contato</h1>
      <p><i className="bi bi-envelope"></i> Email: Livia@gmail.com</p>
      <p><i className="bi bi-telephone"></i> Telefone: (11)00000-0000</p>
    </div>



    <img src={Cat} alt="Gato com carro" className="foto" 
    style={{
        "width": "500px"
    }}/>
  
</div>

            </div>
    )
}