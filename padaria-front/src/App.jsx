import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// TELAS PRINCIPAIS
import Home from "./pages/Home/Home";

// CLIENTE
import CadastroCliente from "./pages/Cliente/CadastroCliente";

// FUNCIONÁRIO
import MenuFuncionario from "./pages/Funcionario/MenuFuncionario";
import NovoFuncionario from "./pages/Funcionario/NovoFuncionario";
import ListaFuncionarios from "./pages/Funcionario/ListaFuncionarios";

// STATUS
import NovoStatusCliente from "./pages/Cliente/ListaStatusCliente";
import ListaStatusCliente from "./pages/Cliente/ListaStatusCliente

// CARGO
import NovoCargo from "./pages/Funcionario/NovoCargo";
import ListaCargo from "./pages/Funcionario/ListaCargo";

// TIPO PRODUTO
import NovoTipoProduto from "./pages/Funcionario/NovoTipoProduto";
import ListaTipoProduto from "./pages/Funcionario/ListaTipoProduto";

// PAGAMENTO
import NovoTipoPagamento from "./pages/Funcionario/NovoTipoPagamento";
import ListaTipoPagamento from "./pages/Funcionario/ListaTipoPagamento";

// PRODUTO
import NovoProduto from "./pages/Funcionario/NovoProduto";
import ListaProdutos from "./pages/Funcionario/ListaProdutos";

// VENDA
import NovaVenda from "./pages/Funcionario/NovaVenda";
import ListaVendas from "./pages/Funcionario/ListaVendas";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "15px", background: "#ddd" }}>
        <Link to="/">Início</Link> {" | "}
        <Link to="/cliente/cadastro">Cadastro Cliente</Link> {" | "}
        <Link to="/funcionario">Funcionário</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* CLIENTE */}
        <Route path="/cliente/cadastro" element={<CadastroCliente />} />

        {/* FUNCIONÁRIO */}
        <Route path="/funcionario" element={<MenuFuncionario />} />
        <Route path="/funcionario/novo" element={<NovoFuncionario />} />
        <Route path="/funcionario/lista" element={<ListaFuncionarios />} />

        {/* STATUS */}
        <Route path="/status/novo" element={<NovoStatusCliente />} />
        <Route path="/status/lista" element={<ListaStatusCliente />} />

        {/* CARGO */}
        <Route path="/cargo/novo" element={<NovoCargo />} />
        <Route path="/cargo/lista" element={<ListaCargo />} />

        {/* TIPO PRODUTO */}
        <Route path="/tipo-produto/novo" element={<NovoTipoProduto />} />
        <Route path="/tipo-produto/lista" element={<ListaTipoProduto />} />

        {/* PAGAMENTO */}
        <Route path="/pagamento/novo" element={<NovoTipoPagamento />} />
        <Route path="/pagamento/lista" element={<ListaTipoPagamento />} />

        {/* PRODUTO */}
        <Route path="/produto/novo" element={<NovoProduto />} />
        <Route path="/produto/lista" element={<ListaProdutos />} />

        {/* VENDA */}
        <Route path="/venda/novo" element={<NovaVenda />} />
        <Route path="/venda/lista" element={<ListaVendas />} />
      </Routes>
    </BrowserRouter>
  );
}
