import Livia from "../assets/livia.jpeg"
import "./Sobre.css"

export const Sobre = () =>{
    return(
        <div className="wrappersobre">

            <div>
                <img className="picture" src={Livia} alt="" />
            </div>

            <div className="sobre">
               <h5> Meu nome é Livia Vittória de Oliveira Lima, sou estudante de Medicina Veterinária na UNISA, atualmente no último ano do curso. Tenho paixão pelo cuidado com os animais e pelo bem-estar animal, buscando sempre ampliar meus conhecimentos em clínica, cirurgia e manejo de diferentes espécies. Sou dedicada, proativa e estou em constante aprendizado, pronta para aplicar meus conhecimentos na prática profissional e contribuir positivamente em ambientes de saúde animal.</h5>
                
            </div>
            
        </div>
    )
}