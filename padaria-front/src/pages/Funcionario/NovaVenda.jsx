import { useState, useEffect } from "react";

function NovaVenda() {
  const [clienteId, setClienteId] = useState("");
  const [produtoId, setProdutoId] = useState("");
  const [funcionarioId, setFuncionarioId] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function carregar() {
      setClientes(await (await fetch("http://localhost:8081/cliente")).json());
      setProdutos(await (await fetch("http://localhost:8081/produto")).json());
      setFuncionarios(await (await fetch("http://localhost:8081/funcionario")).json());
    }
    carregar();
  }, []);

  const salvar = async () => {
    const resp = await fetch("http://localhost:8081/venda", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_cliente: clienteId,
        id_produto: produtoId,
        id_funcionario: funcionarioId,
        quantidade
      })
    });

    const dados = await resp.json();
    alert(dados.mensagem || "Venda cadastrada!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastrar Venda</h1>

      <select value={clienteId} onChange={(e) => setClienteId(e.target.value)}>
        <option value="">Selecione o cliente</option>
        {clientes.map((c) => (
          <option key={c.id} value={c.id}>{c.nome_cliente}</option>
        ))}
      </select><br /><br />

      <select value={produtoId} onChange={(e) => setProdutoId(e.target.value)}>
        <option value="">Selecione o produto</option>
        {produtos.map((p) => (
          <option key={p.id} value={p.id}>{p.nome_produto}</option>
        ))}
      </select><br /><br />

      <select value={funcionarioId} onChange={(e) => setFuncionarioId(e.target.value)}>
        <option value="">Selecione o funcionário</option>
        {funcionarios.map((f) => (
          <option key={f.id} value={f.id}>{f.nome_funcionario}</option>
        ))}
      </select><br /><br />

      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      /><br /><br />

      <button onClick={salvar}>Cadastrar</button>
    </div>
  );
}

export default NovaVenda;
