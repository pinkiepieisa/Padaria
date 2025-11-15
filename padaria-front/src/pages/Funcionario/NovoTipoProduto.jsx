import { useState } from "react";

export default function NovoTipoProduto() {
  const [nome_tipo, setTipo] = useState("");

  async function salvarTipo() {
    const resp = await fetch("http://localhost:8081/tipo-produto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome_tipo }),
    });

    const data = await resp.json();
    alert(data.message);
    setTipo("");
  }

  return (
    <div>
      <h2>Novo Tipo de Produto</h2>

      <input
        type="text"
        placeholder="Pães / Doces / Bebidas..."
        value={nome_tipo}
        onChange={(e) => setTipo(e.target.value)}
      />

      <button onClick={salvarTipo}>Cadastrar</button>
    </div>
  );
}
