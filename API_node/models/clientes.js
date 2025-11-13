const db = require('./db');
const clientes = db.sequelize.define('clientes', {
    id_cliente: {
        type: db.Sequelize.INTEGER,
        autoIncremente: true,
        allowNull: false,
        primaryKey: true
    },
    nome_cliente: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    limite_fiado: {
        type: db.Sequelize.FLOAT //! Podia ter colocado como decimal igual aos outros campos
    },
    fk_status: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'status_cliente', key: 'id_status'},
        onDelete: 'CASCADE',
        allowNull: false
    },
    fk_endereco: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'endereco', key: 'id_endereco'},
        onDelete: 'CASCADE',
        allowNull: false   
    },
    fk_telefone: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'telefone', key: 'id_telefone'},
        onDelete: 'CASCADE',
        allowNull: false
    }
}, {freezeTableName: true});

clientes.sync({force: false});
module.exports = clientes;