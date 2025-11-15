import { useEffect, useState } from "react";

export default function NovaVenda() {
  // Selects
  const [clientes, setClientes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [pagamentos, setPagamentos] = useState([]);
  const [produtos, setProdutos] = useState([]);

  // Campos
  const [fk_cliente, setCliente] = useState("");
  const [fk_funcionario, setFuncionario] = useState("");
  const [fk_pagamento, setPagamento] = useState("");

  const [fk_produto, setProd] = useState("");
  const [quantidade, setQtd] = useState("");
  const [preco_unitario, setPreco] = useState("");

  useEffect(() => {
    async function loadAll() {
      setClientes(await fetch("http://localhost:8081/cliente").then(r => r.json()));
      setFuncionarios(await fetch("http://localhost:8081/funcionario").then(r => r.json()));
      setPagamentos(await fetch("http://localhost:8081/pagamento").then(r => r.json()));
      setProdutos(await fetch("http://localhost:8081/produto").then(r => r.json()));
    }
    loadAll();
  }, []);

  async function cadastrar() {
    const resp = await fetch("http://localhost:8081/venda", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fk_cliente,
        fk_funcionario,
        fk_pagamento,
        venda_produto: { fk_produto, quantidade, preco_unitario },
      }),
    });

    const data = await resp.json();
    alert(data.message);
  }

  return (
    <div>
      <h2>Nova Venda</h2>

      <h3>Cliente</h3>
      <select value={fk_cliente} onChange={(e) => setCliente(e.target.value)}>
        <option value="">Selecione</option>
        {clientes.map((c) => (
          <option key={c.id_cliente} value={c.id_cliente}>
            {c.nome_cliente}
          </option>
        ))}
      </select>

      <h3>Funcionário</h3>
      <select value={fk_funcionario} onChange={(e) => setFuncionario(e.target.value)}>
        <option value="">Selecione</option>
        {funcionarios.map((f) => (
          <option key={f.id_funcionario} value={f.id_funcionario}>
            {f.nome_funcionario}
          </option>
        ))}
      </select>

      <h3>Pagamento</h3>
      <select value={fk_pagamento} onChange={(e) => setPagamento(e.target.value)}>
        <option value="">Selecione</option>
        {pagamentos.map((p) => (
          <option key={p.id_pagamento} value={p.id_pagamento}>
            {p.tipo_pagamento}
          </option>
        ))}
      </select>

      <h3>Produto</h3>
      <select value={fk_produto} onChange={(e) => setProd(e.target.value)}>
        <option value="">Selecione</option>
        {produtos.map((p) => (
          <option key={p.id_produto} value={p.id_produto}>
            {p.nome_produto}
          </option>
        ))}
      </select>

      <input placeholder="Quantidade" value={quantidade} onChange={(e) => setQtd(e.target.value)} />
      <input placeholder="Preço unitário" value={preco_unitario} onChange={(e) => setPreco(e.target.value)} />

      <button onClick={cadastrar}>Cadastrar Venda</button>
    </div>
  );
}
