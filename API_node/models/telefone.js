const db = require('./db');
const telefone = db.sequelize.define('telefone', {
    id_telefone: {
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
    telefone_cliente: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    tipo_telefone: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
}, {freezeTableName: true});

telefone.sync({force: false});
module.exports = telefone;