import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function buscar() {
      const res = await fetch("http://localhost:8081/produto");
      const dados = await res.json();
      setProdutos(dados.produtos || dados.produto || []);
    }
    buscar();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Lista de Produtos</h1>

      <ul>
        {produtos.map((p) => (
          <li key={p.id_produto}>
            <strong>{p.nome_produto}</strong> — R${p.preco_produto}
          </li>
        ))}
      </ul>

      <Link to="/funcionario">
        <button style={{ marginTop: 20 }}>Voltar</button>
      </Link>
    </div>
  );
}
