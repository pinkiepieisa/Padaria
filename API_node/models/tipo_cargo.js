const db = require('./db');
const tipo_cargo = db.sequelize.define('tipo_cargo', {
    id_cargo: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_cargo: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
    
}, {freezeTableName: true});

tipo_cargo.sync({force: true});
module.exports = tipo_cargo;