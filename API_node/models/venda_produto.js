const db = require('./db');
const venda_produto = db.sequelize.define('venda_produto', {
    id_vp: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true    
    },
    fk_venda: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'vendas', key: 'id_venda'},
        onDelete: 'CASCADE',
        allowNull: false
    },
    fk_produto: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'produtos', key: 'id_produto'},
        onDelete: 'CASCADE',
        allowNull: false
    },
    quantidade: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },
    preco_unitario: {
        type: db.Sequelize.DECIMAL(10,2),
        allowNull: false
    }
}, {freezeTableName: true});

venda_produto.sync({force: true});
module.exports = venda_produto;