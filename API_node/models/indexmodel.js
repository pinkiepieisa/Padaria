const db = require("./db");

// Importando models
const Cliente = require("./clientes");
const Endereco = require("./endereco");
const Status = require("./status_cliente");
const Telefone = require("./telefone");

const Produtos = require('./produtos');
const TipoProduto = require('./tipo_produto');

// Criando as associations

// Cliente 1 ----- N Endereco
Cliente.hasMany(Endereco, { foreignKey: "fk_cliente" });
Endereco.belongsTo(Cliente, { foreignKey: "fk_cliente" });

// Cliente 1 ----- N Telefone
Cliente.hasMany(Telefone, { foreignKey: "fk_cliente" });
Telefone.belongsTo(Cliente, { foreignKey: "fk_cliente" });

// Clientes 1 ----- N Status 
Cliente.hasMany(Status, { foreignKey: "fk_cliente" });
Status.belongsTo(Cliente, { foreignKey: "fk_cliente" });

TipoProduto.hasMany(Produtos, { foreignKey: "fk_tipo_p" });
Produtos.belongsTo(TipoProduto, { foreignKey: "fk_tipo_p" });

module.exports = { Cliente, Endereco, Status, Telefone };
module.exports = { Produtos, TipoProduto };

