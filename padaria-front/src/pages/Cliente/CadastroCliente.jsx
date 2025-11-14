import { useState } from "react";
import { Link } from "react-router-dom";

export default function CadastroCliente() {
  const [form, setForm] = useState({
    nome_cliente: "",
    limite_fiado: "",
    rua: "",
    numero: "",
    bairro: "",
    complemento: "",
    status_cli: "",
    telefone_cliente: "",
    tipo_telefone: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const resposta = await fetch("http://localhost:8081/cliente", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cliente: {
          nome_cliente: form.nome_cliente,
          limite_fiado: form.limite_fiado,
        },
        endereco: {
          rua: form.rua,
          numero: form.numero,
          bairro: form.bairro,
          complemento: form.complemento,
        },
        status: {
          status_cli: form.status_cli,
        },
        telefone: {
          telefone_cliente: form.telefone_cliente,
          tipo_telefone: form.tipo_telefone,
        }
      }),
    });

    const dados = await resposta.json();
    alert(dados.message);
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Cadastro de Cliente</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: 300 }}>
        <input name="nome_cliente" placeholder="Nome" onChange={handleChange} />
        <input name="limite_fiado" placeholder="Limite de fiado" onChange={handleChange} />
        <input name="rua" placeholder="Rua" onChange={handleChange} />
        <input name="numero" placeholder="Número" onChange={handleChange} />
        <input name="bairro" placeholder="Bairro" onChange={handleChange} />
        <input name="complemento" placeholder="Complemento" onChange={handleChange} />
        <input name="status_cli" placeholder="Status" onChange={handleChange} />
        <input name="telefone_cliente" placeholder="Telefone" onChange={handleChange} />
        <input name="tipo_telefone" placeholder="Tipo de telefone" onChange={handleChange} />

        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/">
        <button style={{ marginTop: 20 }}>Voltar</button>
      </Link>
    </div>
  );
}
