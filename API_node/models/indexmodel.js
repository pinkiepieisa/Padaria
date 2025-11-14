const db = require("./db");

// Importando models
const Cliente = require("./clientes");
const Endereco = require("./endereco");
const Status = require("./status_cliente");
const Telefone = require("./telefone");

const Produto = require('./produtos');
const TipoProduto = require('./tipo_produto');

const Funcionario = require('./funcionarios');
const Cargo = require('./tipo_cargo');

const Pagamento = require('./pagamento');
const Venda = require('./vendas');
const VendaProduto = require('./venda_produto');


// Criando as associations

// Cliente 1 ----- N Endereco
Cliente.hasMany(Endereco, { foreignKey: "fk_cliente" });
Endereco.belongsTo(Cliente, { foreignKey: "fk_cliente" });

// Cliente 1 ----- N Telefone
Cliente.hasMany(Telefone, { foreignKey: "fk_cliente" });
Telefone.belongsTo(Cliente, { foreignKey: "fk_cliente" });

// Clientes 1 ----- N Status 
Cliente.hasOne(Status, { foreignKey: "fk_cliente" });
Status.belongsTo(Cliente, { foreignKey: "fk_cliente" });

TipoProduto.hasMany(Produto, { foreignKey: "fk_tipo_p" });
Produto.belongsTo(TipoProduto, { foreignKey: "fk_tipo_p" });

Cargo.hasMany(Funcionario, { foreignKey: "fk_cargo" });
Funcionario.belongsTo(Cargo, { foreignKey: "fk_cargo" });

//Vendas
Cliente.hasMany(Venda, { foreignKey: "fk_cliente" });
Venda.belongsTo(Cliente, { foreignKey: "fk_cliente" });

Funcionario.hasMany(Venda, { foreignKey: "fk_funcionario" });
Venda.belongsTo(Funcionario, { foreignKey: "fk_funcionario" });

Pagamento.hasMany(Venda, { foreignKey: "fk_pagamento" });
Venda.belongsTo(Pagamento, { foreignKey: "fk_pagamento" });

//Venda produto
Venda.hasMany(VendaProduto, { foreignKey: "fk_venda" });
VendaProduto.belongsTo(Venda, { foreignKey: "fk_venda" });

Produto.hasMany(VendaProduto, { foreignKey: "fk_produto" });
VendaProduto.belongsTo(Produto, { foreignKey: "fk_produto" });

//Exportações
module.exports = { Cliente, Endereco, Status, Telefone };
module.exports = { Produto, TipoProduto };
module.exports = { Funcionario, Cargo };
module.exports = { Pagamento, Venda, VendaProduto };

