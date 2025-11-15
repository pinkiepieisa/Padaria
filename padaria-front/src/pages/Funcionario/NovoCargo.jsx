import { useState } from "react";

function NovoCargo() {
  const [nomeCargo, setNomeCargo] = useState("");

  const salvarCargo = async () => {
    const resposta = await fetch("http://localhost:8081/cargo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome_cargo: nomeCargo
      })
    });

    const dados = await resposta.json();
    alert(dados.mensagem || "Cargo cadastrado");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastrar Cargo</h1>

      <input
        type="text"
        placeholder="Nome do cargo"
        value={nomeCargo}
        onChange={(e) => setNomeCargo(e.target.value)}
      />

      <br /><br />

      <button onClick={salvarCargo}>Cadastrar</button>
    </div>
  );
}

export default NovoCargo;
