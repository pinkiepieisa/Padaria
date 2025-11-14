const db = require('./db');
const vendas = db.sequelize.define('vendas', {
    id_venda: { 
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true    
    },
    data_hora: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    fk_funcionario: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'funcionarios', key: 'id_funcionario'},
        onDelete: 'CASCADE',
        allowNull: false
    },
    fk_cliente: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'clientes', key: 'id_cliente'},
        onDelete: 'CASCADE',
        allowNull: false
    },
    fk_pagamento: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'pagamento', key: 'id_pagamento'},
        onDelete: 'CASCADE',
        allowNull: false
    }
}, {freezeTableName: true});

vendas.sync({force: true});
module.exports = vendas;