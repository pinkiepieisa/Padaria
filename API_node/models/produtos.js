const db = require('./db');
const produtos = db.sequelize.define('produtos', {
    id_produto: { 
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_produto: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    fk_tipo_p: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tipo_produto', key: 'id_tipo'},
        onDelete: 'CASCADE',
    },
    unidade_medida: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    preco_produto: {
        type: db.Sequelize.DECIMAL(10,2),
        allowNull: false
    }
}, {freezeTableName: true});

produtos.sync({force: false});
module.exports = produtos;