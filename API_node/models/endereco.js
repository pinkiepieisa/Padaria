const db = require('./db');
const endereco = db.sequelize.define('endereco', {
    id_endereco: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
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
        type: db.Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    complemento: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true});


endereco.sync({force: true});
module.exports = endereco;