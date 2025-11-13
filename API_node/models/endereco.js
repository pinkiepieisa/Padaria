const db = require('./db');
const endereco = db.sequelize.define('endereco', {
    id_endereco: {
        type: db.Sequelize.INTEGER,
        autoIncremente: true,
        allowNull: false,
        primaryKey: true
    },
    fk_cliente: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'clientes', key: 'id_cliente'},
        onDelete: 'CASCADE',
        allowNull: false
    },
    rua: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    numero: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    bairro: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    complemento: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
}, {freezeTableName: true});

endereco.sync({force: false});
module.exports = endereco;