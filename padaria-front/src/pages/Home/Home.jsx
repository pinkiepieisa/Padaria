import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Bem-vindo à Padaria!</h1>
      <h2>Escolha sua área:</h2>

      <div style={{ display: "flex", gap: 20 }}>
        
        <Link to="/cliente/cadastro">
          <button style={{ padding: 20, fontSize: 18 }}>
            Sou Cliente
          </button>
        </Link>

        <Link to="/funcionario">
          <button style={{ padding: 20, fontSize: 18 }}>
            Sou Funcionário
          </button>
        </Link>

      </div>
    </div>
  );
}
