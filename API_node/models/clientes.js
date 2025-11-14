const db = require('./db');
const clientes = db.sequelize.define('clientes', {
    id_cliente: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_cliente: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    limite_fiado: {
        type: db.Sequelize.DECIMAL 
    },

}, {freezeTableName: true});

clientes.sync({force: false});
module.exports = clientes;