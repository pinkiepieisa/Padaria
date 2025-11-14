const db = require('./db');
const tipo_produto = db.sequelize.define('tipo_produto', {
    id_tipo: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_tipo: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true});

tipo_produto.sync({force: true});
module.exports = tipo_produto;