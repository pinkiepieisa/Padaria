import { useState } from "react";

export default function NovoTipoPagamento() {
  const [tipo_pagamento, setTipo] = useState("");

  async function salvar() {
    const resp = await fetch("http://localhost:8081/pagamento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tipo_pagamento }),
    });

    const data = await resp.json();
    alert(data.message);
    setTipo("");
  }

  return (
    <div>
      <h2>Novo Tipo de Pagamento</h2>

      <input
        type="text"
        placeholder="Dinheiro / Cartão / Pix..."
        value={tipo_pagamento}
        onChange={(e) => setTipo(e.target.value)}
      />

      <button onClick={salvar}>Cadastrar</button>
    </div>
  );
}
