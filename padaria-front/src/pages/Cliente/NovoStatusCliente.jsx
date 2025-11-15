import { useState } from "react";

export default function NovoStatusCliente() {
  const [status_cli, setStatus] = useState("");

  async function salvarStatus() {
    const resp = await fetch("http://localhost:8081/status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status_cli }),
    });

    const data = await resp.json();
    alert(data.message || "Erro ao cadastrar");
    setStatus("");
  }

  return (
    <div>
      <h2>Novo Status de Cliente</h2>

      <input
        type="text"
        placeholder="Status (Bom / Médio / Ruim)"
        value={status_cli}
        onChange={(e) => setStatus(e.target.value)}
      />

      <button onClick={salvarStatus}>Cadastrar</button>
    </div>
  );
}
