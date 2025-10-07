import React, { useState } from "react";

export const Caso = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resultado, setResultado] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

 
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState(null);
  const [resultCase, setResultCase] = useState(null);


  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const url = "http://127.0.0.1:5000/login";

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        setResultado({ message: data.message, token: data.access_token });
        setAuthenticated(true);
      } else {
        setResultado({ message: data.message });
      }
    } catch (error) {
      console.log("Erro:", error.message);
    }
  };

 
  const submitCaso = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("raca", raca);
    formData.append("idade", idade);
    formData.append("descricao", descricao);
    if (foto) {
      formData.append("foto", foto);
    }

    try {
      const token = localStorage.getItem("token");
      const url = "http://127.0.0.1:5000/caso";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setResultCase(data);
      } else {
        setResultCase({ mensagem: data.mensagem || "Erro ao criar caso" });
      }
    } catch (error) {
      console.log("Erro ao enviar caso:", error.message);
    }
  };

    const getdata = async() =>{
        try{
        const [casos, setCasos] = ([])

        const urlcase = "http://127.0.0.1:5000/caso"
        const resposta = await fetch(urlcase)

        const datacase = await resposta.json()
        setCasos(datacase)

        }catch(error){
            console.log("Erro", error)
        }


    };

    useEffect(() => {
    getdata(); 
  }, []);




  if (!isAuthenticated) {
    return (
      <div>
        {resultado && <p>{resultado.message}</p>}
        <form onSubmit={submitLogin}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Cadastrar Caso</h1>

      {resultCase && <p>{resultCase.mensagem || "Caso criado com sucesso!"}</p>}

      <form onSubmit={submitCaso}>
        <input
          type="text"
          placeholder="Nome do animal"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Raça"
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrição do caso"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFoto(e.target.files[0])}
        />
        <button type="submit">Enviar Caso</button>
      </form>

        <h1>Casos cadastrados</h1>

    

    </div>
  );
};
