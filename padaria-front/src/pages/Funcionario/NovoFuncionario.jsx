import { useState } from "react";
import { Link } from "react-router-dom";

export default function NovoFuncionario() {
  const [form, setForm] = useState({
    nome_funcionario: "",
    fk_cargo: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8081/funcionario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const dados = await res.json();
    alert(dados.message);
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Novo Funcionário</h1>

      <form onSubmit={handleSubmit}>
        <input name="nome_funcionario" placeholder="Nome" onChange={handleChange} />
        <input name="fk_cargo" placeholder="Cargo (ID)" onChange={handleChange} />

        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/funcionario">
        <button style={{ marginTop: 20 }}>Voltar</button>
      </Link>
    </div>
  );
}
