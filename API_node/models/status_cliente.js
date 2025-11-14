const db = require('./db');
const status_cliente = db.sequelize.define('status_cliente', {
id_status: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  status_cli: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  fk_cliente: {
    type:  db.Sequelize.INTEGER,
    allowNull: false,
    references: {model: 'clientes', key: 'id_cliente'},
    onDelete: 'CASCADE',
    allowNull: false
  }
}, {freezeTableName: true});

status_cliente.sync({force: false});
module.exports = status_cliente;