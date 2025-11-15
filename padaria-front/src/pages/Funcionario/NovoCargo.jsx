import { useState } from "react";

export default function NovoCargo() {
  const [nome_cargo, setCargo] = useState("");

  async function salvarCargo() {
    const resp = await fetch("http://localhost:8081/cargo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome_cargo }),
    });

    const data = await resp.json();
    alert(data.message);
    setCargo("");
  }

  return (
    <div>
      <h2>Novo Cargo</h2>

      <input
        type="text"
        placeholder="Ex.: Atendente, Caixa..."
        value={nome_cargo}
        onChange={(e) => setCargo(e.target.value)}
      />

      <button onClick={salvarCargo}>Cadastrar</button>
    </div>
  );
}
