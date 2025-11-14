import { Link } from "react-router-dom";

export default function MenuFuncionario() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Área do Funcionário</h1>

      <h2>O que deseja fazer?</h2>

      <ul style={{ fontSize: 18, lineHeight: "2.2em" }}>

        <li><Link to="/funcionario/lista-clientes">Lista de Clientes</Link></li>

        <li><Link to="/funcionario/lista-funcionarios">Lista de Funcionários</Link></li>
        <li><Link to="/funcionario/novo-funcionario">Cadastrar Funcionário</Link></li>

        <li><Link to="/funcionario/lista-produtos">Lista de Produtos</Link></li>
        <li><Link to="/funcionario/novo-produto">Cadastrar Produto</Link></li>

        <li><Link to="/funcionario/lista-vendas">Lista de Vendas</Link></li>
        <li><Link to="/funcionario/nova-venda">Cadastrar Venda</Link></li>
      </ul>

      <Link to="/">
        <button style={{ marginTop: 30 }}>Voltar</button>
      </Link>
    </div>
  );
}
