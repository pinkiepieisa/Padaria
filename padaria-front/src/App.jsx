import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Páginas iniciais
import Home from "./pages/Home/Home";

// Cliente
import CadastroCliente from "./pages/Cliente/CadastroCliente";

// Funcionário - Menu
import MenuFuncionario from "./pages/Funcionario/MenuFuncionario";

// Funcionário - Listas
import ListaClientes from "./pages/Funcionario/ListaClientes";
import ListaFuncionarios from "./pages/Funcionario/ListaFuncionarios";
import ListaProdutos from "./pages/Funcionario/ListaProdutos";
import ListaVendas from "./pages/Funcionario/ListaVendas";

// Funcionário - Cadastros
import NovoFuncionario from "./pages/Funcionario/NovoFuncionario";
import NovoProduto from "./pages/Funcionario/NovoProduto";
import NovaVenda from "./pages/Funcionario/NovaVenda";

function App() {
  return (
    <BrowserRouter>
      {/* --- NAVBAR SIMPLES --- */}
      <nav style={{ padding: "15px", background: "#ddd" }}>
        <Link to="/">Início</Link>
        {" | "}
        <Link to="/cliente/cadastro">Cadastro Cliente</Link>
        {" | "}
        <Link to="/funcionario">Funcionário</Link>
      </nav>

      {/* --- ROTAS DO SISTEMA --- */}
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* CLIENTE */}
        <Route path="/cliente/cadastro" element={<CadastroCliente />} />

        {/* FUNCIONÁRIO */}
        <Route path="/funcionario" element={<MenuFuncionario />} />

        {/* FUNCIONÁRIO → LISTAS */}
        <Route path="/funcionario/lista-clientes" element={<ListaClientes />} />
        <Route path="/funcionario/lista-funcionarios" element={<ListaFuncionarios />} />
        <Route path="/funcionario/lista-produtos" element={<ListaProdutos />} />
        <Route path="/funcionario/lista-vendas" element={<ListaVendas />} />

        {/* FUNCIONÁRIO → CADASTROS */}
        <Route path="/funcionario/novo-funcionario" element={<NovoFuncionario />} />
        <Route path="/funcionario/novo-produto" element={<NovoProduto />} />
        <Route path="/funcionario/nova-venda" element={<NovaVenda />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
