import { Link } from "react-router-dom";

function MenuFuncionario() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Área do Funcionário</h1>

      <h2>Funcionários</h2>
      <ul>
        <li><Link to="/funcionario/novo-funcionario">Cadastrar Funcionário</Link></li>
        <li><Link to="/funcionario/lista-funcionarios">Lista de Funcionários</Link></li>
      </ul>

      <h2>Produtos</h2>
      <ul>
        <li><Link to="/funcionario/novo-produto">Cadastrar Produto</Link></li>
        <li><Link to="/funcionario/lista-produtos">Lista de Produtos</Link></li>
        <li><Link to="/funcionario/novo-tipo-produto">Cadastrar Tipo de Produto</Link></li>
        <li><Link to="/funcionario/lista-tipo-produto">Lista Tipos de Produto</Link></li>
      </ul>

      <h2>Vendas</h2>
      <ul>
        <li><Link to="/funcionario/nova-venda">Cadastrar Venda</Link></li>
        <li><Link to="/funcionario/lista-vendas">Lista de Vendas</Link></li>
      </ul>

      <h2>Status Cliente</h2>
      <ul>
        <li><Link to="/funcionario/novo-status">Cadastrar Status</Link></li>
        <li><Link to="/funcionario/lista-status">Lista Status</Link></li>
      </ul>

      <h2>Cargos</h2>
      <ul>
        <li><Link to="/funcionario/novo-cargo">Cadastrar Cargo</Link></li>
        <li><Link to="/funcionario/lista-cargos">Lista Cargos</Link></li>
      </ul>

      <h2>Clientes</h2>
      <ul>
        <li><Link to="/funcionario/lista-clientes">Lista de Clientes</Link></li>
      </ul>
    </div>
  );
}

export default MenuFuncionario;
