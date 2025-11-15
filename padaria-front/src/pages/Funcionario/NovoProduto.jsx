import { useEffect, useState } from "react";

export default function NovoProduto() {
  const [nome_produto, setNome] = useState("");
  const [unidade_medida, setMedida] = useState("");
  const [preco_produto, setPreco] = useState("");

  const [fk_tipo_p, setFkTipo] = useState("");
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    async function load() {
      const resp = await fetch("http://localhost:8081/tipo-produto");
      const data = await resp.json();
      setTipos(data);
    }
    load();
  }, []);

  async function cadastrar() {
    const resp = await fetch("http://localhost:8081/produto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome_produto,
        unidade_medida,
        preco_produto,
        fk_tipo_p,
      }),
    });

    const data = await resp.json();
    alert(data.message);
  }

  return (
    <div>
      <h2>Novo Produto</h2>

      <input placeholder="Nome" value={nome_produto} onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Unidade (un, kg…)" value={unidade_medida} onChange={(e) => setMedida(e.target.value)} />
      <input placeholder="Preço" value={preco_produto} onChange={(e) => setPreco(e.target.value)} />

      <select value={fk_tipo_p} onChange={(e) => setFkTipo(e.target.value)}>
        <option value="">Selecione o Tipo</option>
        {tipos.map((t) => (
          <option key={t.id_tipo} value={t.id_tipo}>
            {t.nome_tipo}
          </option>
        ))}
      </select>

      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}
