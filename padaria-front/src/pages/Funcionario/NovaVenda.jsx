import { useState } from "react";
import { Link } from "react-router-dom";

export default function NovaVenda() {
  const [form, setForm] = useState({
    data_hora: "",
    fk_funcionario: "",
    fk_cliente: "",
    fk_pagamento: "",
    fk_venda: "",
    fk_produto: "",
    quantidade: "",
    preco_unitario: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8081/venda", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const dados = await res.json();
    alert(dados.message);
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Nova Venda</h1>

      <form onSubmit={handleSubmit}>

        <input name="data_hora" placeholder="Data e Hora" onChange={handleChange} />
        <input name="fk_funcionario" placeholder="Funcionário (ID)" onChange={handleChange} />
        <input name="fk_cliente" placeholder="Cliente (ID)" onChange={handleChange} />
        <input name="fk_pagamento" placeholder="Pagamento (ID)" onChange={handleChange} />

        <hr />

        <input name="fk_produto" placeholder="Produto (ID)" onChange={handleChange} />
        <input name="quantidade" placeholder="Quantidade" onChange={handleChange} />
        <input name="preco_unitario" placeholder="Preço unitário" onChange={handleChange} />

        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/funcionario">
        <button style={{ marginTop: 20 }}>Voltar</button>
      </Link>
    </div>
  );
}
