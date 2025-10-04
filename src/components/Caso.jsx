import React, { useState } from "react";

export const Caso = () =>{
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [resultado, setResultado] = useState(null)
    const [IsAuthenticated, setAuthenticated] = useState(false)

    const submit = async(e) =>{
        e.preventDefault()
        try{
            const url = "http://127.0.0.1:5000/login"

            const response = await fetch(url, {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email,senha}),
            })

            const data = await response.json()

            if(response.ok){
                localStorage.setItem("token", data.access_token)
                setResultado({message: data.message, token: data.access_token})
                setAuthenticated(true)
            }else{
                setResultado({message: data.message})
            }
            
        }catch(error){
            console.log("Erro:", error.message)
        }
    }
    if(!IsAuthenticated){
        return(
            <div>
                {resultado && <p>{resultado.message}</p>}
                <form onSubmit={submit}>
                    <input 
                    type="email" 
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                    type="password" 
                    placeholder="senha"
                    onChange={(e) => setSenha(e.target.value)}/>


                    <button type="submit">Entrarr</button>
                </form>
            </div>
        )   
    }else{
        return(
            <div>
                <h1>Bem vindaaaaaaaaaaaaaaa</h1>
            </div>
        )
    }
    
}