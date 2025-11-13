const db = require('./db');
const produtos = db.sequelize.define('produtos', {
    id_produtos: { //! Escrevi no plural no script mysql 
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_produtos: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    fk_tipo_p: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tipo_produto', key: 'id_tipo'},
        onDelete: 'CASCADE',
        allowNull: false
    },
    unidade_medida: {
        type: db.Sequelize.TEXT,
        allowNull: false,
    },
    preco_produto: {
        type: db.Sequelize.DECIMAL,
        allowNull: false
    }
}, {freezeTableName: true});

produtos.sync({force: false});
module.exports = produtos;