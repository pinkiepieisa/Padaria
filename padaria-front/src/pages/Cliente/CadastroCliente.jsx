import { useEffect, useState } from "react";

export default function CadastroCliente() {
  const [nome_cliente, setNome] = useState("");
  const [limite_fiado, setFiado] = useState("");

  // Endereço
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComple] = useState("");

  // Telefone
  const [telefone_cliente, setTelefone] = useState("");
  const [tipo_telefone, setTipoTel] = useState("");

  // Status (SELECT)
  const [statusList, setStatusList] = useState([]);
  const [fk_status, setFkStatus] = useState("");

  useEffect(() => {
    async function loadStatus() {
      const resp = await fetch("http://localhost:8081/status");
      const data = await resp.json();
      setStatusList(data);
    }
    loadStatus();
  }, []);

  async function cadastrar() {
    const payload = {
      cliente: { nome_cliente, limite_fiado },
      endereco: { rua, numero, bairro, complemento },
      status: { fk_status },
      telefone: { telefone_cliente, tipo_telefone },
    };

    const resp = await fetch("http://localhost:8081/cliente", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();
    alert(data.message || "Erro!");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Cliente</h2>

      <input placeholder="Nome" value={nome_cliente} onChange={(e) => setNome(e.target.value)} />
      <br />

      <input placeholder="Limite de Fiado" value={limite_fiado} onChange={(e) => setFiado(e.target.value)} />
      <br />

      {/* SELECT - STATUS */}
      <select value={fk_status} onChange={(e) => setFkStatus(e.target.value)}>
        <option value="">Selecione o Status</option>
        {statusList.map((s) => (
          <option key={s.id_status} value={s.id_status}>
            {s.status_cli}
          </option>
        ))}
      </select>

      <h3>Endereço</h3>
      <input placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} /><br />
      <input placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} /><br />
      <input placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} /><br />
      <input placeholder="Complemento" value={complemento} onChange={(e) => setComple(e.target.value)} /><br />

      <h3>Telefone</h3>
      <input placeholder="Telefone" value={telefone_cliente} onChange={(e) => setTelefone(e.target.value)} /><br />
      <input placeholder="Tipo (celular, fixo...)" value={tipo_telefone} onChange={(e) => setTipoTel(e.target.value)} /><br />

      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}
