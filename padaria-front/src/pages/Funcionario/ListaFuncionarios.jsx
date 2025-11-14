import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListaFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function buscar() {
      const res = await fetch("http://localhost:8081/funcionario");
      const dados = await res.json();
      setFuncionarios(dados.funcionarios || dados.funcionario || []);
    }
    buscar();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Lista de Funcionários</h1>

      <ul>
        {funcionarios.map((f) => (
          <li key={f.id_funcionario}>
            <strong>{f.nome_funcionario}</strong>
          </li>
        ))}
      </ul>

      <Link to="/funcionario">
        <button style={{ marginTop: 20 }}>Voltar</button>
      </Link>
    </div>
  );
}
