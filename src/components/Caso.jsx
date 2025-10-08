import React, { useState, useEffect } from "react";
import Toastify from "toastify";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Caso.css";

const API_URL = "https://back-end-portfolio-frwh.onrender.com";

export const Caso = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resultado, setResultado] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState(null); // apenas 1 foto
  const [resultCase, setResultCase] = useState(null);
  const [casos, setCasos] = useState([]);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentEditCaso, setCurrentEditCaso] = useState(null);

  // ---------- LOGIN ----------
  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      const data = await response.json();
      if (response.ok) { 
        localStorage.setItem("token", data.access_token);
        toast.success("Login Bem Sucedido"); 
        setResultado({ message: data.message });
        setAuthenticated(true);
      } else {
        setResultado({ message: data.message });
        toast.error("Email ou senha incorretos")
      }
    } catch (error) {
      
      console.log("Erro:", error.message);
    }
  };

  // ---------- GET CASOS ----------
  const getdata = async () => {
    try {
      
      const resposta = await fetch(`${API_URL}/caso`);
      const datacase = await resposta.json();
      setCasos(datacase);
    } catch (error) {
      console.log("Erro", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // ---------- HANDLE FILE CHANGE ----------
  const handleFileChange = (e) => {
    setFoto(e.target.files[0]); // pega só 1 foto
    console.log("Arquivo selecionado:", e.target.files[0]);
  };

  // ---------- CREATE CASO ----------
  const submitCaso = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("raca", raca);
    formData.append("idade", idade);
    formData.append("descricao", descricao);
    if (foto) formData.append("foto", foto);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/caso`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Caso criado com sucesso!");
        setResultCase(data);
        getdata();
        setNome("");
        setRaca("");
        setIdade("");
        setDescricao("");
        setFoto(null);
      } else {
        setResultCase({ mensagem: data.mensagem || "Erro ao criar caso" });
      }
    } catch (error) {
      console.log("Erro ao enviar caso:", error.message);
      Toastify.error
    }
  };

  // ---------- DELETE CASO ----------
  const deleteCaso = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${API_URL}/caso/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const text = await response.text();
        console.error("Erro ao deletar caso:", text);
        return;
      }
      setCasos((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  // ---------- EDIT CASE ----------
  const openEditModal = (caso) => {
    setCurrentEditCaso(caso);
    setNome(caso.nome);
    setRaca(caso.raca);
    setIdade(caso.idade);
    setDescricao(caso.descricao);
    setFoto(null);
    setEditModalOpen(true);
  };

  const updateCaso = async (id) => {
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("raca", raca);
    formData.append("idade", idade);
    formData.append("descricao", descricao);
    if (foto) formData.append("foto", foto);

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${API_URL}/caso/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        getdata();
        toast.success("Editado com sucesso")
        setEditModalOpen(false);
        setFoto(null);
      } else {
        console.error("Erro ao atualizar:", data);
      }
    } catch (error) {
      toast.error("Falha ao editar")
      console.error("Erro na atualização:", error);
    }
  };

  // ---------- RENDER ----------
  if (!isAuthenticated) {
    return (
      <div className="wrapper">
        <ToastContainer position="top-right" autoClose={3000} />
        <form onSubmit={submitLogin}>
          <h1>Login</h1>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="wrappercase">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1>Cadastrar Caso</h1>
      {resultCase && <p>{resultCase.mensagem || "Caso criado com sucesso!"}</p>}

      <form className="case" onSubmit={submitCaso}>
        <input type="text" placeholder="Nome do animal" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type="text" placeholder="Raça" value={raca} onChange={(e) => setRaca(e.target.value)} required />
        <input type="text" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
        <textarea placeholder="Descrição do caso" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        <input type="file" name="foto" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Enviar Caso</button>
      </form>

      <h1>Casos cadastrados</h1>
      <div className="casos-grid">
        {casos.map((caso) => (
          <div key={caso.id} className="caso-card">
            {caso.foto && <img src={caso.foto} alt={caso.nome} className="caso-foto" />}
            <div className="caso-info">
              <h3>{caso.nome}</h3>
              <p><strong>Raça:</strong> {caso.raca}</p>
              <p><strong>Idade:</strong> {caso.idade}</p>
              <p>{caso.descricao}</p>
              <button onClick={() => deleteCaso(caso.id)} style={{ background: "red", color: "white" }}>Delete</button>
              <button onClick={() => openEditModal(caso)} style={{ background: "blue", color: "white", marginLeft: "5px" }}>Editar</button>
            </div>
          </div>
        ))}
      </div>

      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Editar Caso</h2>
            <form onSubmit={(e) => { e.preventDefault(); updateCaso(currentEditCaso.id); }}>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
              <input type="text" value={raca} onChange={(e) => setRaca(e.target.value)} required />
              <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} required />
              <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <button type="submit">Salvar Alterações</button>
              <button type="button" onClick={() => setEditModalOpen(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
