import { useState } from "react";
import { Link } from "react-router-dom";

export default function NovoProduto() {
  const [form, setForm] = useState({
    nome_produto: "",
    fk_tipo_p: "",
    unidade_medida: "",
    preco_produto: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8081/produto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const dados = await res.json();
    alert(dados.message);
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Novo Produto</h1>

      <form onSubmit={handleSubmit}>
        <input name="nome_produto" placeholder="Nome" onChange={handleChange} />
        <input name="fk_tipo_p" placeholder="Tipo de Produto (ID)" onChange={handleChange} />
        <input name="unidade_medida" placeholder="Unidade" onChange={handleChange} />
        <input name="preco_produto" placeholder="Preço" onChange={handleChange} />

        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/funcionario">
        <button style={{ marginTop: 20 }}>Voltar</button>
      </Link>
    </div>
  );
}
