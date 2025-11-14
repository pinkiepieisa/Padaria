import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListaClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function buscar() {
      const res = await fetch("http://localhost:8081/cliente");
      const dados = await res.json();
      
      setClientes(dados.clientes || dados.cliente || []);
    }
    buscar();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Lista de Clientes</h1>

      <ul>
        {clientes.map((c) => (
          <li key={c.id_cliente}>
            <strong>{c.nome_cliente}</strong> — Limite: R${c.limite_fiado}
          </li>
        ))}
      </ul>

      <Link to="/funcionario">
        <button style={{ marginTop: 20 }}>Voltar</button>
      </Link>
    </div>
  );
}
