const db = require("./db");

// Import models
const Cliente = require("./clientes");
const Endereco = require("./endereco");
const Status = require("./status_cliente");
const Telefone = require("./telefone");

// Associations

// Cliente 1 ----- N Endereco
Cliente.hasMany(Endereco, { foreignKey: "fk_cliente" });
Endereco.belongsTo(Cliente, { foreignKey: "fk_cliente" });

// Cliente 1 ----- N Telefone
Cliente.hasMany(Telefone, { foreignKey: "fk_cliente" });
Telefone.belongsTo(Cliente, { foreignKey: "fk_cliente" });

// Status 1 ----- N Clientes
Cliente.hasMany(Status, { foreignKey: "fk_cliente" });
Status.belongsTo(Cliente, { foreignKey: "fk_cliente" });

module.exports = {
  Cliente,
  Endereco,
  Status,
  Telefone,
};
