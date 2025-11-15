import { useState } from "react";

function NovoTipoProduto() {
  const [descricao, setDescricao] = useState("");

  const salvarTipo = async () => {
    const resposta = await fetch("http://localhost:8081/tipo-produto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        descricao_tipo: descricao
      })
    });

    const dados = await resposta.json();
    alert(dados.mensagem || "Tipo de produto cadastrado");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastrar Tipo de Produto</h1>

      <input
        type="text"
        placeholder="Descrição do tipo"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <br /><br />
      <button onClick={salvarTipo}>Cadastrar</button>
    </div>
  );
}

export default NovoTipoProduto;
