import { useEffect, useState } from "react";

export default function ListaTipoProduto() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function carregar() {
      const resp = await fetch("http://localhost:8081/tipo-produto");
      const data = await resp.json();
      setLista(data);
    }
    carregar();
  }, []);

  return (
    <div>
      <h2>Tipos de Produtos</h2>
      <ul>
        {lista.map((p) => (
          <li key={p.id_tipo}>{p.nome_tipo}</li>
        ))}
      </ul>
    </div>
  );
}
