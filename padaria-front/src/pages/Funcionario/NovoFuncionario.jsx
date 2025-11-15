import { useState, useEffect } from "react";

function NovoFuncionario() {
  const [nome, setNome] = useState("");
  const [salario, setSalario] = useState("");
  const [cargoId, setCargoId] = useState("");
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    async function carregarCargos() {
      const resposta = await fetch("http://localhost:8081/cargo");
      const dados = await resposta.json();
      setCargos(dados);
    }
    carregarCargos();
  }, []);

  const salvarFuncionario = async () => {
    const resposta = await fetch("http://localhost:8081/funcionario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome_funcionario: nome,
        salario,
        id_cargo: cargoId
      })
    });

    const dados = await resposta.json();
    alert(dados.mensagem || "Funcionário cadastrado");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastrar Funcionário</h1>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Salário"
        value={salario}
        onChange={(e) => setSalario(e.target.value)}
      /><br /><br />

      <select value={cargoId} onChange={(e) => setCargoId(e.target.value)}>
        <option value="">Selecione um cargo...</option>
        {cargos.map((c) => (
          <option key={c.id} value={c.id}>{c.nome_cargo}</option>
        ))}
      </select>

      <br /><br />
      <button onClick={salvarFuncionario}>Cadastrar</button>
    </div>
  );
}

export default NovoFuncionario;
