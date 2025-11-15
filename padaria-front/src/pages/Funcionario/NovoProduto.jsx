import { useState, useEffect } from "react";

function NovoProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [tipoId, setTipoId] = useState("");
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    async function carregarTipos() {
      const resp = await fetch("http://localhost:8081/tipo-produto");
      const dados = await resp.json();
      setTipos(dados);
    }
    carregarTipos();
  }, []);

  const salvar = async () => {
    const r = await fetch("http://localhost:8081/produto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome_produto: nome,
        preco,
        id_tipo_produto: tipoId
      })
    });

    const d = await r.json();
    alert(d.mensagem || "Produto cadastrado!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastrar Produto</h1>

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      /><br /><br />

      <select value={tipoId} onChange={(e) => setTipoId(e.target.value)}>
        <option value="">Selecione um tipo</option>
        {tipos.map((t) => (
          <option key={t.id} value={t.id}>
            {t.descricao_tipo}
          </option>
        ))}
      </select>

      <br /><br />
      <button onClick={salvar}>Cadastrar</button>
    </div>
  );
}

export default NovoProduto;
