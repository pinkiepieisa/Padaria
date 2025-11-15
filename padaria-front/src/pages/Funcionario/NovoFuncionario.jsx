import { useEffect, useState } from "react";

export default function NovoFuncionario() {
  const [nome_funcionario, setNome] = useState("");
  const [fk_cargo, setFkCargo] = useState("");
  const [cargoList, setCargoList] = useState([]);

  useEffect(() => {
    async function load() {
      const resp = await fetch("http://localhost:8081/cargo");
      const data = await resp.json();
      setCargoList(data);
    }
    load();
  }, []);

  async function cadastrar() {
    const resp = await fetch("http://localhost:8081/funcionario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome_funcionario, fk_cargo }),
    });

    const data = await resp.json();
    alert(data.message);
  }

  return (
    <div>
      <h2>Novo Funcionário</h2>

      <input
        placeholder="Nome"
        value={nome_funcionario}
        onChange={(e) => setNome(e.target.value)}
      />

      <select value={fk_cargo} onChange={(e) => setFkCargo(e.target.value)}>
        <option value="">Selecione o Cargo</option>
        {cargoList.map((c) => (
          <option key={c.id_cargo} value={c.id_cargo}>
            {c.nome_cargo}
          </option>
        ))}
      </select>

      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}
