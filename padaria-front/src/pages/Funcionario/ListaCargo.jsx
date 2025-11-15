import { useEffect, useState } from "react";

export default function ListaCargo() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function carregar() {
      const resp = await fetch("http://localhost:8081/cargo");
      const data = await resp.json();
      setLista(data);
    }
    carregar();
  }, []);

  return (
    <div>
      <h2>Cargos</h2>
      <ul>
        {lista.map((c) => (
          <li key={c.id_cargo}>{c.nome_cargo}</li>
        ))}
      </ul>
    </div>
  );
}
