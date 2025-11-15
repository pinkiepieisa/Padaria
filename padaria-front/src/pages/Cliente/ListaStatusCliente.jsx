import { useEffect, useState } from "react";

export default function ListaStatusCliente() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function carregar() {
      const resp = await fetch("http://localhost:8081/status");
      const data = await resp.json();
      setLista(data);
    }
    carregar();
  }, []);

  return (
    <div>
      <h2>Status de Clientes</h2>
      <ul>
        {lista.map((s) => (
          <li key={s.id_status}>{s.status_cli}</li>
        ))}
      </ul>
    </div>
  );
}
