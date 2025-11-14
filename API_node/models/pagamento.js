const db = require('./db');
const pagamento = db.sequelize.define('pagamento', {
    id_pagamento: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    tipo_pagamento: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true});

pagamento.sync({force: true});
module.exports = pagamento;