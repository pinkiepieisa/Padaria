const db = require('./db');
const tipo_produto = db.sequelize.define('tipo_produto', {
    id_tipo: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_tipo: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
}, {freezeTableName: true});

tipo_produto.sync({force: false});
module.exports = tipo_produto;