const db = require('./db');
const telefone = db.sequelize.define('telefone', {
    id_telefone: {
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
    telefone_cliente: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    tipo_telefone: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true});

telefone.sync({force: false});
module.exports = telefone;