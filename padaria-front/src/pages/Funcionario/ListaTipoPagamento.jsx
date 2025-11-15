import { useEffect, useState } from "react";

export default function ListaTipoPagamento() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function carregar() {
      const resp = await fetch("http://localhost:8081/pagamento");
      const data = await resp.json();
      setLista(data);
    }
    carregar();
  }, []);

  return (
    <div>
      <h2>Tipos de Pagamento</h2>
      <ul>
        {lista.map((p) => (
          <li key={p.id_pagamento}>{p.tipo_pagamento}</li>
        ))}
      </ul>
    </div>
  );
}
