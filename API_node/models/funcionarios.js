const db = require('./db');
const funcionarios = db.sequelize.define('funcionarios', {
    id_funcionario: {
        type: db.Sequelize.INTEGER,
        autoIncremente: true,
        allowNull: false,
        primaryKey: true
    },
    nome_funcionario: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    fk_cargo: {
        type:  db.Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tipo_cargo', key: 'id_cargo'},
        onDelete: 'CASCADE',
        allowNull: false
    }
}, {freezeTableName: true});

funcionarios.sync({force: false});
module.exports = funcionarios;