import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListaVendas() {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    async function buscar() {
      const res = await fetch("http://localhost:8081/venda");
      const dados = await res.json();
      setVendas(dados.vendas || []);
    }
    buscar();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Lista de Vendas</h1>

      <ul>
        {vendas.map((v) => (
          <li key={v.id_vendas}>
            Venda #{v.id_vendas} — Cliente: {v.fk_cliente} — Funcionário: {v.fk_funcionario}
          </li>
        ))}
      </ul>

      <Link to="/funcionario">
        <button style={{ marginTop: 20 }}>Voltar</button>
      </Link>
    </div>
  );
}
